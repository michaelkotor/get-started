const User = require('../models/user');
const Repository = require('../storage/repository').UserRepository;

const repo = new Repository();

module.exports = class CRUDService {
    async createUser(email, name, age) {
        if(await repo.ifUserExistsWithEmail(email)) {
            return new Error();
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
        return new Error();
    }

    async updateUserById(_id, email, name, age) {
        const userToUpdate = await repo.getUserById(_id);
        if(userToUpdate == null) {
            return new Error();
        }
        if(userToUpdate.email != email) {
            if(await repo.ifUserExistsWithEmail(email) == false){
                const newUserToPush = new User(_id, email, name, age);
                return await repo.editUser(newUserToPush);
            } else {
                return new Error();
            }
        } else {
            const newUserToPush = new User(_id, email, name, age);
            return await repo.editUser(newUserToPush);
        }
    }

    async deleteUserById(_id) {
        const userToDelete = await repo.getUserById(_id);
        if(!userToDelete) {
            return new Error();
        }
        await repo.deleteUserById(_id)
        return userToDelete;
    }
};