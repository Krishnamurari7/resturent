import express from 'express'

import {loginUser, registerUser } from "../controllers/userController.js"


userRouter.post('/login', loginUser)
userRouter.post('/register', registerUser)

export default userRouter;