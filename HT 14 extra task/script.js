'use strict';

const listContainer = document.getElementById('listContainer');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');


const TODO_LIST_URL = 'https://jsonplaceholder.typicode.com/todos';

const CLASS_LI = 'li';
const CLASS_DELETE = 'delete';
const CLASS_COMPLETE = 'complete';


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


function onTaskElementClick(e) {

    removeElement(e);
    toggleElement(e);
}


function onAddBtnClick() {

    if(taskInput.value) {
        const newTask = {};

        newTask.title = taskInput.value;
        
        generateHtml(newTask);
        clearInput();
    }
};


function appendElement(todoEl, deleteBtn) {
    listContainer.append(todoEl);
    todoEl.append(deleteBtn);
}

function addClass(task, obj, deleteBtn) {
    task.classList.add(CLASS_LI);
    deleteBtn.classList.add(CLASS_DELETE);

    checkStatus(obj, task);
}

function checkStatus(obj, task) {

    if(obj.completed) {
        task.classList.add(CLASS_COMPLETE);
    } 
}

function removeElement(e) {
    if(e.target.classList.contains(CLASS_DELETE)) {
        e.target.parentNode.remove();
    }
}

function toggleElement(e) {
    e.target.classList.toggle(CLASS_COMPLETE);
}

function clearInput() {
    taskInput.value = '';
}

