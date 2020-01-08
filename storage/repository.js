const User = require('../models/user');
const Client = require('./connect/connection');

const client = new Client();

module.exports.UserRepository =  class UserRepository {
    async addNewUser(userToAdd) {
        const collection = await client.getCollection('Users', 'my');
        const _id = Math.round(Math.random() * 100000000000) + "";
        userToAdd._id = _id;
        await collection.insertOne(userToAdd);
        return userToAdd;
    };

    async getAllUsers() {
        const collection = (await client.getCollection('Users', 'my'));
        const array = await collection.find({}).toArray();
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push( await array[i]);
        }
        return result;
    }

    async getUserById(id) {
        const collection = await client.getCollection('Users', 'my');
        return await collection.findOne({_id:id});
    }

    async editUser(userToUpdate) {
        const collection = await client.getCollection('Users', 'my');
        await collection.updateOne({_id:userToUpdate._id}, {$set: userToUpdate});
        return userToUpdate;
    }

    async deleteUserById(_id) {
        const collection = await client.getCollection('Users', 'my');
        const result = await collection.deleteOne({_id:_id});

        return result;
    }

    async ifUserExistsWithEmail(email) {
        const collection = await client.getCollection('Users', 'my');
        const userEmail = await collection.findOne({email:email});
        if(userEmail == null) {
            return false;
        }
        return true;
    }
};

