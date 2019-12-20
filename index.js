const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const  bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
})
app.use('/api', userRouter);

app.use(function (req, res, next) {
    res.status(404).send('Not Fount');
});

app.listen(5000);