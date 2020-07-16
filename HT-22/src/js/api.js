const api = {
    
    get: (url) => {
        return fetch(url)
        .then((res) => res.json());
    },

    post: (url, newTask) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json());
    },

    delete: (url, id) => {
        return fetch(url + '/' + id, {
                method: 'DELETE',
            });
    },

    update: (url, id) => {
        return fetch(url + '/' + id)
        .then((res) => res.json());
    },

    modify: (url, id, userTask) => {
        return fetch(url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userTask),
        })
            .then((res) => res.json());
    } 
}

