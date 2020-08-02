const TODO_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';

const $listContainer = $('#listContainer');
const $taskInput = $('#taskInput');
const $addBtn = $('#addTaskBtn');


class Controller {
    constructor() {
        
        this.todoCollection = new Collection(TODO_URL);
        this.todoCollection
        .fetch()
        .then(() => this.listView.render(this.todoCollection.todoList));
        
        this.listView = new List({
            onDelete: this.onDelete.bind(this),
            onAddTask: this.onAddTask.bind(this),
            onTodoClick: this.onTodoClick.bind(this)
        });

        this.refreshData();

    }

    onDelete(id) {
        this.todoCollection.delete(id)
            .then(() => this.renderData());
    }

    onAddTask(newTask) {
        this.todoCollection.create(newTask)
            .then(() => this.renderData());
    }

    onTodoClick(id) {
        this.todoCollection.toggleTask(id)
            .then(() => this.renderData());
    }

    refreshData() {
        this.todoCollection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.listView.render(this.todoCollection.todoList);
    }
}