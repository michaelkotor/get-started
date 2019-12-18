const users = [];

module.exports = class User {

    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
    }

    get(email) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].email == email) {
                return users[i];
            }
        }
        return new Error('Not Found');
    }

    save() {
        users.push(this);
    }

    delete() {
        //users.splice()
    }

    put() {
        //do something
    }

    static getAll() {
        return users;
    }
}