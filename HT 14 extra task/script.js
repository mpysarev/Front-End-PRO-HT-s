'use strict';

const listContainer = document.createElement('ul');

const CLASS_CONTAINER = 'container';
const CLASS_LI = 'li';
const CLASS_DELETE = 'delete';
const CLASS_COMPLETE = 'complete';

document.body.append(listContainer);

listContainer.classList.add(CLASS_CONTAINER);

listContainer.addEventListener('click', toggleElement);
listContainer.addEventListener('click', deleteElement);


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        getData(data);
    });


function getData(dataArr) {
    dataArr.forEach(generateHtml);
}


function generateHtml(dataObj) {

    const todoEl = document.createElement('li');
    const deleteBtn = document.createElement('span');


    todoEl.textContent = dataObj.title;
    deleteBtn.textContent = 'X';

    
    listContainer.append(todoEl);
    todoEl.append(deleteBtn);

    addClass(todoEl, dataObj, todoEl, deleteBtn);    
}



function addClass(task, obj, li, deleteBtn) {
    task.classList.add(CLASS_LI);
    deleteBtn.classList.add(CLASS_DELETE);

    checkStatus(obj, li);
}

function checkStatus(obj, li) {

    if(obj.completed) {
        li.classList.add(CLASS_COMPLETE);
    } 
}

function deleteElement(e) {
    if(e.target.classList.contains(CLASS_DELETE)) {
        e.target.parentNode.remove();
    }
}

function toggleElement(e) {
    e.target.classList.toggle(CLASS_COMPLETE);
}