const User = require('../models/user');

const users = [];

module.exports =  class UserRepository {
    createNewUser(email, name, age) {
        let id =  Math.round((Math.random() * (1000 - 100) + 100) * 10000000);
        let tempUser = new User(email, name, age, id);
        users.push(tempUser);
        return id;
    };

    getAllUsers() {
        return users;
    }

    getUserById(id) {
        for(let i = 0 ; i < users.length; i++) {
            if(users[i] == id) {
                return users[i];
            }
        }
        return null;
    }
};

