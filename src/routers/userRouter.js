import express from "express";
import { edit, userInfoDelete } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", userInfoDelete);

export default userRouter;
