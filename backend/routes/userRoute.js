import express from 'express';

import {loginUser, registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post('/login', loginUser)
userRouter.post('/registr', registerUser)

export default userRouter;