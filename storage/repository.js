const User = require('../models/user');
const Client = require('./connect/connection');

const client = new Client();

module.exports.UserRepository =  class UserRepository {
    async addNewUser(userToAdd) {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return 'Error with database';
        }
        const _id = Math.round(Math.random() * 100000000000) + "";
        userToAdd._id = _id;
        await collection.insertOne(userToAdd);
        return userToAdd;
    };

    async getAllUsers() {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return 'Error with database';
        }
        const array = await collection.find({}).toArray();
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push( await array[i]);
        }
        return result;
    }

    async getUserById(id) {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return 'Error with database';
        }
        return await collection.findOne({_id:id});
    }

    async editUser(userToUpdate) {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return  'Error with database';
        }
        await collection.updateOne({_id:userToUpdate._id}, {$set: userToUpdate});
        return userToUpdate;
    }

    async deleteUserById(_id) {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return 'Error with database';
        }
        const result = await collection.deleteOne({_id:_id});
        return result;
    }

    async ifUserExistsWithEmail(email) {
        let collection;
        try {
            collection = await client.getCollection('Users', 'my');
        } catch (e) {
            return 'Error with database';
        }
        const userEmail = await collection.findOne({email:email});
        if(userEmail == null) {
            return false;
        }
        return true;
    }
};

