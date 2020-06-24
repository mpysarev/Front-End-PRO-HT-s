'use strict';

const listContainer = document.getElementById('listContainer');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');


const TODO_LIST_URL = 'https://jsonplaceholder.typicode.com/todos';

const CLASS_LI = 'li';
const CLASS_DELETE = 'delete';
const CLASS_COMPLETE = 'complete';

let taskId = 1;
let deleteBtnId = 1;


listContainer.addEventListener('click', onTaskElementClick);
addBtn.addEventListener('click', onAddBtnClick);


getData();



function getData() {
    fetch(TODO_LIST_URL)
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        setData(data);
    });
}

function onTaskElementClick(e) {
    removeElement(e);
    toggleElement(e);
}

function onAddBtnClick() {

    if(taskInput.value) {
        const newTask = {completed: false};

        newTask.title = taskInput.value;
        
        generateHtml(newTask);
        clearInput();
        postTask(newTask);
    }
};

function removeElement(e) {
    if(e.target.classList.contains(CLASS_DELETE)) {
        e.target.parentNode.remove();
        
        deleteTask(e.target.dataset.deletebtnId);
    }
}

function toggleElement(e) {

    const taskId = e.target.dataset.taskId;

    e.target.classList.toggle(CLASS_COMPLETE);

    if(e.target.classList.contains('li')) {
        updateTask(e, taskId);
    }
}


function postTask(newTask) {
    fetch(TODO_LIST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));    
}

function deleteTask(deleteBtnId) {
    fetch(TODO_LIST_URL + '/' + deleteBtnId, {
        method: 'DELETE',
    });
}

function updateTask(e, taskId) {
    fetch(TODO_LIST_URL + '/' + taskId)
        .then((res) => res.json())
        .then((data) => modifyTask(e, taskId, data))
}


function modifyTask(e, taskId, userTask) {

    checkIfComplete(e, userTask);

    fetch(TODO_LIST_URL + '/' + taskId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userTask),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));    
}



function setData(dataArr) {
    dataArr.forEach(generateHtml);
}


function generateHtml(dataObj) {
    const todoEl = document.createElement('li');
    const deleteBtn = document.createElement('span');


    todoEl.textContent = dataObj.title;
    deleteBtn.textContent = 'X';

    appendElement(todoEl, deleteBtn);
    addClass(todoEl, dataObj, deleteBtn);    
}




function appendElement(todoEl, deleteBtn) {
    listContainer.prepend(todoEl);
    todoEl.append(deleteBtn);
}

function addClass(task, obj, deleteBtn) {

    task.classList.add(CLASS_LI);
    deleteBtn.classList.add(CLASS_DELETE);

    addAttributes(task, deleteBtn);
    checkStatus(obj, task);
}

function checkStatus(obj, task) {

    if(obj.completed) {
        task.classList.add(CLASS_COMPLETE);
    } 
}

function addAttributes(task, deleteBtn) {
    task.setAttribute('data-task-id', taskId++);
    deleteBtn.setAttribute('data-deleteBtn-id', deleteBtnId++);
}

function clearInput() {
    taskInput.value = '';
}

function checkIfComplete(e, data) {
    if(e.target.classList.contains('complete')) {
        data.completed = true;
    } else {
        data.completed = false;
    }
}
