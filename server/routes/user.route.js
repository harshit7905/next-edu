import { Router } from "express";
import { register, verifyUser,loginUser, myProfile } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
const router=Router()

router.post('/user/register',register);
router.post('/user/verify',verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me",isAuth,myProfile);

export default router;


