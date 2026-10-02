import argon2 from 'argon2';
import User from '../models/User.js';

export const signInUserService = async ({email, password}) => {
    const user = await User.findOne({ email })
    console.log(user);
    if(!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if(!isPasswordValid) {
        const error = new Error("Invalid password");
        error.statusCode = 401;
        throw error;
    }
    const data = user.toObject();
    delete data.password;
    delete data.__v;
    delete data.createdAt;
    delete data.updatedAt;
    delete data.email;
    delete data.location;
    return data;
}