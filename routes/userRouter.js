const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/getAllUsers', userController.getAllUsers);
userRouter.get('/getUser/:id', userController.getUserById);

userRouter.post('/addUser', userController.addUser);
userRouter.put('/updateUser/:id', userController.editUser);
userRouter.delete('/deleteUser/:id', userController.deleteUser);

module.exports = userRouter;