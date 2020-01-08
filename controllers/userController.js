const CRUDRepository = require('../services/CRUDService');
const CircularJSON = require('circular-json');
const CRUD = new CRUDRepository();

exports.getUserById = async function(req, res) {
    const id = req.params.id;
    res.send(CircularJSON.stringify(await CRUD.getUserById(id)));
};

exports.getAllUsers = async function (req, res) {
    res.send(CircularJSON.stringify(await CRUD.getAllUsers()));
};

exports.addUser = async function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(CircularJSON.stringify(await CRUD.createUser(email, name, age)));
};

exports.editUser = async function (req, res) {
    const id = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(CircularJSON.stringify(await CRUD.updateUserById(id, email, name, age)));
};

exports.deleteUser = async function (req, res) {
    const id = req.params.id;
    res.send(CircularJSON.stringify(await CRUD.deleteUserById(id)));
};
