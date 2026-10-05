import {signInUserService} from "../services/signin.services.js";
import { setSessionService } from "../services/signin.services.js";

export const signinController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await signInUserService({ email, password });
        let sessionID = setSessionService(user._id);
        res.cookie('sessionID', sessionID,{
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
        });
        res.status(200).json({
            status: 'success',
            message: 'User signed in successfully'
        });
    }catch (error) {
        next(error);
    }
}