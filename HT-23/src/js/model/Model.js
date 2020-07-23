class Model {
    constructor(url) {
        this.baseUrl = url;
    }

    setData(data) {
        Object.assign(this, data);
    }

    delete() {
        return fetch(this.baseUrl + '/' + this.id, {
            method: 'DELETE'
        });
    }

    create(newTask) {
        return fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            })
                .then((res) => res.json())
    }

    update(model) {

        if(model.isDone){
            model.isDone = false;
        } else if (!model.isDone) {
            model.isDone = true;
        }


        return fetch(this.baseUrl + '/' + model.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        })
            .then((res) => res.json())
    }
}