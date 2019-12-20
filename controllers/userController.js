const UserRepository = require('../storage/repository');

const Repo = new UserRepository();

exports.getUserById = function(req, res) {
    const id = req.params.id;
    res.send(JSON.stringify(Repo.getUserById(id), null, '\t'));
};

exports.getAllUsers = function (req, res) {
    res.send(JSON.stringify(Repo.getAllUsers(), null, '\t'));
};

exports.addUser = function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    console.log(email);
    let id = Repo.createNewUser(email, name, age);
    res.send(JSON.stringify(id, null, '\t'));
};

exports.editUser = function (req, res) {

};

exports.deleteUser = function (req, res) {

};