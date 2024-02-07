import express from 'express';
import registerUser, { getAdminsData, loginUser, verifyTokenAdmin } from '../Controlers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/getadmin", getAdminsData);

export default userRouter;
