import express from 'express';
import {createUserController} from '../controllers/user.controller.js';

const router = express.Router();

router.get("/",(req,res)=>{

});

router.post("/", createUserController);

export default router;