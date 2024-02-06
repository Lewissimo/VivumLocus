import express from 'express';
import registerUser, { loginUser, verifyTokenAdmin } from '../Controlers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
