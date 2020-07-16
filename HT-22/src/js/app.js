'use strict';

$(() => {
    const $listContainer = $('#listContainer');
    const $taskInput = $('#taskInput');
    const $addBtn = $('#addTaskBtn');

    const TODO_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';


    $listContainer.on('click', '.delete', removeTask);
    $listContainer.on('click', '.task', toggleTask);
    $addBtn.on('click', addNewTask);


    getData();


    function getData() {

        api.get(TODO_LIST_URL)
            .then((data) => setData(data))
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

        deleteTask($(this).parent().data('taskId'));
    }

    function toggleTask(e) {
        const taskId = $(this).data('taskId');

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

        api.post(TODO_LIST_URL, newTask)
            .then((data) => generateHtml(data))
    }

    function deleteTask(id) {
        api.delete(TODO_LIST_URL, id);
    }

    function updateTask(e, taskId) {

        api.update(TODO_LIST_URL, taskId)
            .then((data) => modifyTask(e, taskId, data))
    }

    function modifyTask(e, taskId, userTask) {

        toggleTaskStatus(e, userTask);

        api.modify(TODO_LIST_URL, taskId, userTask)
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
        $taskInput.val('');
    }

})
