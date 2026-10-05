import {session} from '../config/session.js';

export const verifySessionMiddleware = (req, res, next) => {
    const sessionID = req.cookies.sessionID;
    if (!sessionID) {
        const error = new Error("Session ID not found");
        error.statusCode = 401;
        return next(error);
    }
    let sessionData = session.get(sessionID);
    if (!sessionData) {
        const error = new Error("Please sign in to access this resource");
        error.statusCode = 401;
        return next(error);
    }
    req.userID = sessionData.userid;
    next();
}