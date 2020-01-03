const User = require('../models/user');
const Client = require('./connect/connection');

const client = new Client();

module.exports.UserRepository =  class UserRepository {
    async createNewUser(email, name, age) {
        const collection = await client.getCollection('Users', 'my');
        const checkUser = await collection.findOne({email:email});
        if(checkUser != null) {
            return 'Such user already exists';
        }
        const _id = Math.round(Math.random() * 100000000000) + "";
        const tempUser = new User(_id, email, name, age);
        await collection.insertOne(tempUser);
        return tempUser;
    };

    async getAllUsers() {
        const collection = (await client.getCollection('Users', 'my'));
        const cursor = await collection.find({});
        const array = await cursor.toArray();
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push( await array[i]);
        }
        return result;
    }

    async getUserById(id) {
        const collection = await client.getCollection('Users', 'my');
        const userDB = await collection.findOne({_id:id});
        if(userDB == null) {
            return 'No such user';
        }
        return userDB;
    }

    async editUserById(_id, email, name, age) {
        const collection = await client.getCollection('Users', 'my');
        const checkUser = await collection.findOne({email:email});
        if(checkUser != null) {
            return 'Such user already exists. Change email';
        }
        const userToUpdate = new User(_id, email, name, age);
        await collection.updateOne({_id:_id}, {$set: {_id:_id, email:email, name:name, age:age}});
        return userToUpdate;
    }

    async deleteUserById(_id) {
        const collection = await client.getCollection('Users', 'my');
        const userToDelete = await this.getUserById(_id);
        if(userToDelete != null) {
            await collection.deleteOne({_id:_id});
            return userToDelete;
        }
        return 'No such user';
    }
};

