const UserRepository = require('../storage/repository').UserRepository;
const CircularJSON = require('circular-json');
const Repo = new UserRepository();

exports.getUserById = async function(req, res) {
    const id = req.params.id;
    res.send(CircularJSON.stringify(await Repo.getUserById(id)));
};

exports.getAllUsers = async function (req, res) {
    res.send(CircularJSON.stringify(await Repo.getAllUsers()));
};

exports.addUser = async function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(CircularJSON.stringify(await Repo.createNewUser(email, name, age)));
};

exports.editUser = async function (req, res) {
    const id = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(CircularJSON.stringify(await Repo.editUserById(id, email, name, age)));
};

exports.deleteUser = async function (req, res) {
    const id = req.params.id;
    res.send(CircularJSON.stringify(await Repo.deleteUserById(id)));
};
