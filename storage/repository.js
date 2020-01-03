const User = require('../models/user');
const Client = require('./connect/connection');
const users = [];

const client = new Client();

module.exports.UserRepository =  class UserRepository {
    async createNewUser(email, name, age) {
        let id = Math.round(Math.random() * 10000000) + "";
        let tempUser = new User(email, name, age, id, id);
        const collection = await client.getCollection('Users', 'my');
        await collection.insertOne(tempUser);
        const userDB = await collection.findOne({_id:id});
        const tempUserDBid = await User.convert(userDB);
        return tempUserDBid;
    };

    async getAllUsers() {
        const collection = (await client.getCollection('Users', 'my'));
        const cursor = await collection.find({});
        const array = await cursor.toArray();
        let result = [];
        for(let i = 0; i < array.length; i++) {
            result.push( await User.convert(array[i]));
        }
        return result;
    }

    async getUserById(id) {
        const collection = await client.getCollection('Users', 'my');
        //console.log(id);
        const userDB = await collection.findOne({_id:id});
        //console.log(userDB);
        const result = await User.convert(userDB);
        //console.log(result);
        return result;
    }

    async editUserById(id, email, name, age) {
        let userToUpdate = new User(email, name, age, id, id);
        const collection = await client.getCollection('Users', 'my');
        collection.updateOne({_id:id}, { $set: userToUpdate});
        console.log(name);
        return userToUpdate;
    }

    async deleteUserById(id) {
        const collection = await client.getCollection('Users', 'my');
        const userToDelete = await this.getUserById(id);
        if(userToDelete != null) {
            await collection.deleteOne({_id:id});
            return userToDelete;
        }
        return 'No such user';
    }
};

