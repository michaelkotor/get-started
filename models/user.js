module.exports =  class User {
    constructor(email, name, age, id, _id) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.id = id;
        this._id = _id;
    }

    static async convert(userDB) {
        const tempUser = new User(userDB.email, userDB.name, userDB.age, userDB.id, userDB._id);
        return tempUser;
    }
};
