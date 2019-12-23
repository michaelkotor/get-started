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
    const id = Repo.createNewUser(email, name, age);
    res.send(JSON.stringify(id, null, '\t'));
};

exports.editUser = function (req, res) {
    const id = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(JSON.stringify(Repo.editUserById(id, email, name, age), null, '\t'));
};

exports.deleteUser = function (req, res) {
    const id = req.params.id;
    res.send(JSON.stringify(Repo.deleteUserById(id), null, '\t'));
};