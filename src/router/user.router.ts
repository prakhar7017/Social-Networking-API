import express, { Router,Request, Response, NextFunction } from "express";
import UserService from "../service/userService";
import {isAuthenticated} from '../middleware/auth'
import { UserRequest } from "../interface/user.interface";

const router = Router();
const service = new UserService();

interface AuthenticatedRequest extends Request {
    user: {
        _id: string;
    };
}

router.post("/user/signup", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, username} = req.body;
    const { data } = await service.signUp({ email, password ,username});
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/user/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const { data } = await service.signIn({ email, password });
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

// @ts-ignore
router.get("/user/profile",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const id = req.user._id;
        const { data } = await service.getuserDetails(id as string); 
        return res.json(data);
    } catch (err) {
        next(err);
    }
});
// @ts-ignore
router.patch("/user/updateName",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const id = req.user._id;
        const { username,bio } = req.body;
        const { data } = await service.updateProfile(id as string,username,bio); 
        return res.json(data);
    } catch (err) {
        next(err);
    }
});

export default router;