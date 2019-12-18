const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');

app.use('/api', userRouter);

app.use(function (req, res, next) {
    res.status(404).send('Not Fount');
});

app.listen(5000);