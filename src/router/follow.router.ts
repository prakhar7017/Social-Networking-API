
import express, { Router,Request, Response, NextFunction } from "express";
import FollowService from "../service/followService";
import {isAuthenticated} from '../middleware/auth'
import { UserRequest } from "../interface/user.interface";

const router = Router();
const service = new FollowService();

interface AuthenticatedRequest extends Request {
    user: {
        _id: string;
    };
}

//@ts-ignore
router.post("/follow/:id",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { data } = await service.followUser(req.user._id, id);
        return res.json(data);
    } catch (err) {
        next(err);
    }
})

//@ts-ignore
router.delete("/follow/:id",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { data } = await service.unfollowUser(req.user._id, id);
        return res.json(data);
    } catch (err) {
        next(err);
    }
})

export default router;