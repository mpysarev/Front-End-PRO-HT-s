'use strict';

const $listContainer = $('#listContainer');
const $taskInput = $('#taskInput');
const $addBtn = $('#addTaskBtn');

const TODO_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';


$listContainer.on('click', '.delete', removeTask);
$listContainer.on('click', '.task', toggleTask);
$addBtn.on('click', addNewTask);


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

function setData(dataArr) {
    dataArr.forEach(generateHtml);
}

function generateHtml(dataObj) {
 
    const deleteBtn = `<span class="delete">X</span>`;
    const taskNotDone = `<li class="task" data-task-id=${dataObj.id}>${dataObj.title}${deleteBtn}</li>`;
    const taskDone = `<li class="task complete" data-task-id=${dataObj.id}>${dataObj.title}${deleteBtn}</li>`;
    
    
    if(dataObj.isDone) {
        $listContainer.prepend(taskDone);
    } else {$listContainer.prepend(taskNotDone)};
}


function removeTask() {
    $(this).parent().remove();

    deleteTask($(this).parent().data("taskId"));
}

function toggleTask(e) {
    const taskId = $(this).data("taskId");

    $(this).toggleClass('complete');
    
    updateTask(e, taskId);
}

function addNewTask() {

    if($taskInput.val()) {
        const newTask = {isDone: false, title: $taskInput.val()};

        postTask(newTask);
        clearInput();
    }
};


function postTask(newTask) {
    fetch(TODO_LIST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    })
        .then((res) => res.json())
        .then((data) => generateHtml(data));
}

function deleteTask(id) {
    fetch(TODO_LIST_URL + '/' + id, {
        method: 'DELETE',
    });
}

function updateTask(e, taskId) {
    fetch(TODO_LIST_URL + '/' + taskId)
        .then((res) => res.json())
        .then((data) => modifyTask(e, taskId, data))
}

function modifyTask(e, taskId, userTask) {

    toggleTaskStatus(e, userTask);

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


function toggleTaskStatus(e, userTask) {
    if($(e.target).hasClass('complete')) {
        userTask.isDone = true;
    } else {
        userTask.isDone = false;
    }
}

function clearInput() {
    $taskInput.val("");
}
