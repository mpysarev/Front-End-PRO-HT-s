const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addTaskBtn');
const taskListEl = document.getElementById('taskList');

const templateEl = document.getElementById('template').innerHTML;

addBtn.addEventListener('click', onAddBtnClick);
taskListEl.addEventListener('click', onTaskListClick);



function onAddBtnClick() {

    addNewTask(taskInput.value);

    clearInput();
};

function onTaskListClick(e) {
    
    if (e.target.type == 'submit') {
        e.target.parentElement.remove();
    } else if(e.target.tagName == 'UL') {}
    else {e.target.classList.toggle('done')};  
}



function addNewTask(title) {

    taskListEl.innerHTML += templateEl.replace('{{task}}', title);
}


function clearInput() {
    taskInput.value = '';
}





