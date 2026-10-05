import express from 'express';
import {createUserController} from '../controllers/user.controller.js';
import {updatePasswordController} from '../controllers/user.controller.js';
import {verifySessionMiddleware} from '../middleware/verifySession.middleware.js';

const router = express.Router();

router.get("/",(req,res)=>{

});

router.post("/", createUserController);

router.post("/update_password", verifySessionMiddleware, updatePasswordController);

export default router;