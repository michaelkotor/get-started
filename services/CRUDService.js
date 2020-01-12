const User = require('../models/user');
const Repository = require('../storage/repository').UserRepository;

const repo = new Repository();

module.exports = class CRUDService {
    async createUser(email, name, age) {
        if(await repo.ifUserExistsWithEmail(email)) {
            throw new Error('This email is taken!');
        }
        const userToCreate = new User(null, email, name, age);
        return await repo.addNewUser(userToCreate);
    }

    async getAllUsers() {
        return await repo.getAllUsers();
    }

    async getUserById(_id) {
        const tempUser = await repo.getUserById(_id);
        if(tempUser != null) {
            return tempUser;
        }
        throw new Error('No such user');
    }

    async updateUserById(_id, email, name, age) {
        const userToUpdate = await repo.getUserById(_id);
        if(userToUpdate == null) {
            throw new Error('I can\'t modify user I can\'t find');
        }
        if(userToUpdate.email != email) {
            if(await repo.ifUserExistsWithEmail(email) == false){
                const newUserToPush = new User(_id, email, name, age);
                return await repo.editUser(newUserToPush);
            } else {
                throw new Error();
            }
        } else {
            const newUserToPush = new User(_id, email, name, age);
            return await repo.editUser(newUserToPush);
        }
    }

    async deleteUserById(_id) {
        const userToDelete = await repo.getUserById(_id);
        if(!userToDelete) {
            return new Error('I can\'t delete user I am not able to find');
        }
        await repo.deleteUserById(_id)
        return userToDelete;
    }
};