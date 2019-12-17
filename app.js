const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let users = [
    {
        'id': 1,
        'name': 'Michael',
        'age': 18
    }
];

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use('/api', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log('Api was used!');
    next();
});

app.get('/api/getUser/:id', function (req, res) {
    let id = req.params.id;
    let tempUser = users[id];
    if(tempUser !== undefined) {
        res.end(JSON.stringify(tempUser, null, '\t'));
    } else {
        res.sendStatus(404);
    }
});

app.get('/api/getAllUsers', function (req, res) {
    res.end(JSON.stringify(users, null, '\t'));
})

app.post('/api/createUser', function (req, res) {
    let name = req.body.name;
    let age = req.body.age;
    let id = users.length + 1
    ;
    let tempUser = {id, name, age};
    users.push(tempUser);
    res.end(JSON.stringify(tempUser, null, '\t'));
});

app.delete('/api/deleteUser/:id', function (req, res) {
    let id = req.params.id;
    let tempUser = users[id];
    users.splice(id, 1);
    res.end(JSON.stringify(tempUser, null, '\t'));
});

app.put('/api/editUser/:id', function (req, res) {
    let id = req.params.id;
    let tempUser = users[id];
    let newName = req.query.name;
    let newAge = req.query.age;
    if(newName !== undefined) {
        tempUser.name = newName;
    }
    if(newAge !== undefined) {
        tempUser.age = newAge;
    }
    users[id] = tempUser;
    res.end(JSON.stringify(tempUser, null, '\t'));
})

app.listen(5000);