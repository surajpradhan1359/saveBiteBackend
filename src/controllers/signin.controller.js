import {signInUserService} from "../services/signin.services.js";

export const signinController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await signInUserService({ email, password });
        res.status(200).json({
            status: 'success',
            message: 'User signed in successfully',
            data: user
        });
    }catch (error) {
        next(error);
    }
}