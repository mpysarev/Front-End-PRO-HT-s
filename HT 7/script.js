const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');


addBtn.addEventListener('click', onAddBtnClick);


function onAddBtnClick() {

    let li = document.createElement('li');

    li.append(userInput.value);
    
    taskList.append(li);

    userInput.value = '';
}













