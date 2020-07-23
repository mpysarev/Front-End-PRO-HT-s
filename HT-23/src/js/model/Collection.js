class Collection {

    constructor(url) {
        this.url = url;
        this.todoList = [];
    }

    fetch() {
        return fetch(this.url)
                .then((resp) => resp.json())
                .then(this.setData.bind(this));
    }

    setData(data) {
        return (this.todoList = data.map(item => {

            const model = new Model(this.url);
            model.setData(item);
            return model;
        }));
    }

    delete(id) {
        const model = this.todoList.find((item) => item.id == id);

        return model.delete().then(() => {
            this.todoList = this.todoList.filter((item) => item !== model);
        })
    }

    create(newTask) {
        const model = new Model(this.url);

        return model.create(newTask);
    }

    toggleTask(id) {
        const model = this.todoList.find((item) => item.id == id);
        
        return model.update(model)
    }
}