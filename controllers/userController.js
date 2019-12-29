const UserRepository = require('../storage/repository').UserRepository;
const CircularJSON = require('circular-json');
const Repo = new UserRepository();

exports.getUserById = async function(req, res) {
    const id = req.params.id;
    res.send(CircularJSON.stringify(await Repo.getUserById(id), null, '\t'));
};

exports.getAllUsers = async function (req, res) {
    const result = await Repo.getAllUsers();
    console.log(CircularJSON.stringify(result));
    res.send(CircularJSON.stringify(result));
};

exports.addUser = async function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(JSON.stringify(await Repo.createNewUser(email, name, age), null, '\t'));
};

exports.editUser = async function (req, res) {
    const id = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    const age = req.body.age;
    res.send(JSON.stringify(await Repo.editUserById(id, email, name, age), null, '\t'));
};

exports.deleteUser = async function (req, res) {
    const id = req.params.id;
    res.send(JSON.stringify(await Repo.deleteUserById(id), null, '\t'));
};

getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};