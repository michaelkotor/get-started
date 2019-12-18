const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/getAllUsers', userController.getUsers);
userRouter.get('/getUser/:id', userController.getUser)
userRouter.post('/addUser', userController.addUser);
userRouter.put('/changeUser/:id', userController.editUser);
userRouter.delete('deleteUser/:id', userController.deleteUser);

module.exports = userRouter;