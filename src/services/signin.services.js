import argon2 from 'argon2';
import User from '../models/User.js';
import {session} from '../config/session.js';
import crypto from "crypto";

export const signInUserService = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
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

export const setSessionService = (userID) => {
    let sessionID = crypto.randomBytes(16).toString("hex");
    session.set(sessionID, {userid:userID}, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
    });
    return sessionID;
}