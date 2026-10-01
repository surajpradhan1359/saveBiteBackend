import User from "../models/User.js";

export const createUser = async ({ name, email, password ,location}) => {
    if (!name || !email || !password || !location) {
        const error = new Error('All fields are required');
        error.statusCode = 400;
        throw error;
    }
    const user = await User.create({name, email, password, location});
    if (!user) {
        const error = new Error('Failed to create user');
        error.statusCode = 400;
        throw error;
    }
    return user;
}