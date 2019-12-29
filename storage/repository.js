const User = require('../models/user');
const Client = require('./connect/connection');
const users = [];

const client = new Client();

module.exports.UserRepository =  class UserRepository {
    async createNewUser(email, name, age) {
        let tempUser = new User(email, name, age);
        const collection = await client.getCollection('Users', 'my');
        await collection.insertOne(tempUser);
        const userDB = await collection.findOne({email:email, name:name, age:age});
        const tempUserDBid = userDB._id;
        return tempUserDBid;
    };

    async getAllUsers() {
        const collection = (await client.getCollection('Users', 'my'));
        const cursor = await collection.find({});
        const result = await cursor.toArray();
        return result;
    }

    async getUserById(_id) {
        const collection = await client.getCollection('Users', 'my');
        const user = await collection.findOne(client.convertId(_id));
        return user;
    }

    async editUserById(id, email, name, age) {
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

    async deleteUserById(id) {
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

