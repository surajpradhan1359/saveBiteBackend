import User from "../models/User.js";
import argon2 from 'argon2';

export const createUser = async ({ name, email, password ,location}) => {
    if (!name || !email || !password || !location) {
        const error = new Error('All fields are required');
        error.statusCode = 400;
        throw error;
    }
    const hashedPassword = await argon2.hash(password);
    const user = await User.create({name, email, password: hashedPassword, location});
    if (!user) {
        const error = new Error('Failed to create user');
        error.statusCode = 400;
        throw error;
    }
    return user;
}

export const updatePassword = async (userID, newPassword) => {
    console.log("userID:", userID, "newPassword:", newPassword);
    const hashedNewPassword = await argon2.hash(newPassword);
    const user = await User.findByIdAndUpdate(userID, { password: hashedNewPassword }, { new: true }) ;
    if (!user) {
        const error = new Error('Failed to update password');
        error.statusCode = 400;
        throw error;
    }
    return user;    
}