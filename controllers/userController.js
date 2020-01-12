const CRUDRepository = require('../services/CRUDService');
const CircularJSON = require('circular-json');
const CRUD = new CRUDRepository();

exports.getUserById = async function(req, res) {
    const id = req.params.id;
    try {
        res.send(CircularJSON.stringify(await CRUD.getUserById(id)));
    } catch (e) {
        res.sendStatus(400);
        console.log(e);
    }
};

exports.getAllUsers = async function (req, res) {
    try {
        res.send(CircularJSON.stringify(await CRUD.getAllUsers()));
    }catch (e) {
        res.sendStatus(400);
        console.log(e);
    }
};

exports.addUser = async function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    try {
        res.send(CircularJSON.stringify(await CRUD.createUser(email, name, age)));
    } catch (e) {
        res.sendStatus(400);
        console.log(e);
    }
};

exports.editUser = async function (req, res) {
    const id = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    try {
        res.send(CircularJSON.stringify(await CRUD.updateUserById(id, email, name, age)));
    } catch (e) {
        res.sendStatus(400);
        console.log(e);
    }
};

exports.deleteUser = async function (req, res) {
    const id = req.params.id;
    try {
        res.send(CircularJSON.stringify(await CRUD.deleteUserById(id)));
    } catch (e) {
        res.sendStatus(400);
        console.log(e);
    }
};
