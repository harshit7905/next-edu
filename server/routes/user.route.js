import { Router } from "express";
import { register, verifyUser } from "../controllers/user.controller.js";
const router=Router()

router.post('/user/register',register);
router.post('/user/verify',verifyUser);

export default router;


