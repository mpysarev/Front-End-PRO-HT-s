class List {

    constructor(config) {

        this.config = config;

        this.$listEl = $listContainer;
        this.$addBtn = $addBtn;
        this.$taskInput = $taskInput;

        this.renderModel = this.renderModel.bind(this);
        this.$listEl.on('click', '.delete', this.onDeleteBtnClick.bind(this));
        this.$listEl.on('click', '.task', this.onTaskClick.bind(this))
        this.$addBtn.on('click', this.onAddBtnClick.bind(this))

    }

    render(list) {
        this.$listEl.empty();
        list.forEach(this.renderModel)
    }

    renderModel(model){

        const deleteBtn = `<span class="delete">X</span>`;
        const taskNotDone = `<li class="task" data-task-id=${model.id}>${model.title}${deleteBtn}</li>`;
        const taskDone = `<li class="task complete" data-task-id=${model.id}>${model.title}${deleteBtn}</li>`;
    
        if(model.isDone) {
            this.$listEl.prepend(taskDone);
        } else {this.$listEl.prepend(taskNotDone)}
    }

    onDeleteBtnClick(e) {
        const id = $(e.target).parent().data('taskId');

        this.config.onDelete(id);
    }

    onAddBtnClick() {
        
        const newTask = {
            title: this.$taskInput.val(),
            isDone: false
        }

        this.config.onAddTask(newTask);

        $taskInput.val('');
    }

    onTaskClick(e) {
        const id = $(e.target).data('taskId');

        this.config.onTodoClick(id);
    }
}