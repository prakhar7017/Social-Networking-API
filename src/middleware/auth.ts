import { validateJwtToken } from '../utils/utils';
import { Request, Response, NextFunction } from 'express';  
import config from '../config/config';
import { JwtPayload } from 'jsonwebtoken';

// Define a custom Request type with the user property
interface RequestWithUser extends Request {
    user: string | JwtPayload; // Change this to match the type of decodedToken
}

// Middleware function for authenticating requests
export const isAuthenticated = (req: RequestWithUser, res: Response, next: NextFunction) => {
    console.log(req.headers);
    const token = req.headers.authorization || req?.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    const decodedToken = validateJwtToken(token, config.server.jwtSecret || "jwtTOken");

    if (!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    req.user = decodedToken; // Assign the decoded token to the user property of the request
    console.log(req.user)
    next(); // Call the next middleware
};
