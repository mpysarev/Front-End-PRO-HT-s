'use strict';

const listContainer = document.createElement('ul');

const CLASS_CONTAINER = 'container';
const CLASS_LI = 'li';

document.body.append(listContainer);

listContainer.classList.add(CLASS_CONTAINER);




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

    todoEl.textContent = dataObj.title;
    
    listContainer.append(todoEl);

    addClass(todoEl, dataObj, todoEl);    
}



function addClass(task, obj, li) {
    task.classList.add(CLASS_LI);

    checkStatus(obj, li);
}

function checkStatus(obj, li) {

    if(obj.completed) {
        li.classList.add('complete');
    } else {
        li.classList.add('uncomplete');
    }
}