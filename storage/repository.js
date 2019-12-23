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
        for(let i = 0; i < users.length; i++) {
            if(users[i].id == id) {
                console.log(users[i]);
                return users[i];
            }
        }
        return null;
    }

    editUserById(id, email, name, age) {
        let userToUpdate = null;
        let index = users.length + 1;
        for(let i = 0; i < users.length; i++) {
            if(users[i].id == id) {
                index = i;
                userToUpdate = users[i];
                break;
            }
        }
        console.log(name);
        if(email !== undefined) {
            userToUpdate.email = email;
        }
        if(name !== undefined) {
            userToUpdate.name = name;
        }
        if(age !== undefined) {
            userToUpdate.age = age;
        }
        users[index] = userToUpdate;
        return userToUpdate;
    }

    deleteUserById(id) {
        console.log(id);
        let userToDelete = null;
        let index = users.length + 1;
        for(let i = 0 ; i < users.length; i++) {
            if(users[i].id == id) {
                userToDelete = users[i];
                index = i;
                break;
            }
        }
        users.splice(index, 1);
        return userToDelete;
    }
};

