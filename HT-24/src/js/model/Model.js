export default class Model {
    constructor(url) {
        this.url = url;
    }

    setData(data) {
        Object.assign(this, data);
    }

    delete() {
        return fetch(this.url + '/' + this.id, {
            method: 'DELETE'
        });
    }


    update() {

        this.isDone = !this.isDone;

        return fetch(this.url + '/' + this.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this),
        })
            .then((res) => res.json())
    }
}