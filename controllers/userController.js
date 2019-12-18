const User = require('../models/user');

exports.getUser = function(req, res) {
    // users.push(;)
    // let id = req.params.id;
    // let tempUser = new User();
    // if(tempUser !== undefined) {
    //     res.end(JSON.stringify(tempUser, null, '\t'));
    // } else {
    //     res.sendStatus(404);
    // }
};

exports.getUsers = function (req, res) {
    res.send(JSON.stringify(User.getAll(), null, '\t'));
};

exports.addUser = function(req, res) {

};

exports.editUser = function (req, res) {

};

exports.deleteUser = function (req, res) {

};