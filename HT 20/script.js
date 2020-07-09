'use strict';


$(() => {

    const NOTE_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';


    const $notesContainer = $('#notesContainer');
    const $addNoteBtn = $('#addNoteBtn');

    let noteList = [];

    $addNoteBtn.on('click', createNote);

    $notesContainer.on('click', '.delete-note', deleteNote);
    $notesContainer.on('focusout', '.noteContent', modifyNote);
    $notesContainer.on('mousedown', '.note', onNoteDrag);

    let zIndex = 1;


    init();



    function init() {
        getList();
    }


    function getList() {
        fetch(NOTE_LIST_URL)
            .then((res) => res.json())
            .then(setData)
            .then(renderList)
    }


    function setData(data) {
        return (noteList = data);
    }

    function renderList(noteList) {
        noteList.forEach(renderNote);

        makeNotesResizable();
    }

    function renderNote(note) {
        $notesContainer.prepend(getNoteHtml(note));
    }

    function getNoteHtml(note) {

        const noteTemplate = 
        `<div style="width: ${note.width}px; 
                     height: ${note.height}px; 
                     top: ${note.y}px; 
                     left: ${note.x}px" 
            id="note" class="note" 
            data-note-index="${note.id}">
            <span class="delete-note">X</span><br>
            <textarea class="noteContent" name="description" id="">${note.description}</textarea>
        </div>`
        return noteTemplate;
    }


    
    function createNote(e) {
        const note = {
            description: '',
            x: `${e.clientX}`,
            y: `${e.clientY}`,
            width: 300,
            height: 100
        };

        fetch(NOTE_LIST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((res) => res.json())
            .then((note) => {
                noteList.push(note);
                renderNote(note);
            });           
    }

    function deleteNote(e) {

        let id = e.target.parentElement.dataset.noteIndex;
    
        deleteNoteElement(e);
    
        fetch(`${NOTE_LIST_URL}/${id}`, {
            method: 'DELETE',
        });
    }

    function modifyNote(e) {
        const element = e.target;
        
        updateNote(
            element.parentElement.dataset.noteIndex,
            element.name,
            element.value,
            );
    }
        
    function updateNote(id, name, value) {
        
        const note = noteList.find((el) => el.id == id);
        
        note[name] = value;
        
        fetch(`${NOTE_LIST_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }


    function onNoteDrag(e) {

        const target = e.target;

        $(target).css('z-index', zIndex).draggable({

            containment: 'parent',
            start: function() {
                $(target).css('background-color', 'green');
            },
            stop: function(e, ui) {
                $(target).css('background-color', 'rgb(163, 162, 162)');

                updateNotePosition(e, ui);
            }
        });
        zIndex++;
    }

    function makeNotesResizable() {

        $('.note').css('position', 'absolute').resizable({
            minWidth: 250,
            minHeight: 200,
            stop: function (e, ui) {
                updateNoteSize(e, ui);
            }
        });
    }

    function updateNoteSize(e, ui) {

        const id = e.target.dataset.noteIndex;
        const note = noteList.find((el) => el.id == id);

        note.width = ui.size.width;
        note.height = ui.size.height;

        fetch(`${NOTE_LIST_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }


    function updateNotePosition(e, ui) {

        const id = e.target.dataset.noteIndex;
        const note = noteList.find((el) => el.id == id);

        note.x = ui.position.left;
        note.y = ui.position.top;

        fetch(`${NOTE_LIST_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }


    function deleteNoteElement(e) {
        const element = e.target;
    
        $(element).parent().remove();
    }
});



    

        

































