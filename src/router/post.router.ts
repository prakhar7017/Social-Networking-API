
import express, { Router,Request, Response, NextFunction } from "express";
import PostService from "../service/postService";
import {isAuthenticated} from '../middleware/auth'
import { UserRequest } from "../interface/user.interface";

const router = Router();
const service = new PostService();

interface AuthenticatedRequest extends Request {
    user: {
        _id: string;
    };
}

//@ts-ignore
router.post("/post/create",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { title, content} = req.body;
    const { data } = await service.createPost({ title, description: content, _author_id: req.user._id});
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/posts", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await service.findAllPost();
        return res.json(data);
    } catch (err) {
        next(err);
    }
    
});

//@ts-ignore
router.get("/post/:id",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { data } = await service.findPostById(id as string);
    return res.json(data);
  } catch (err) {
    next(err);
  }
});
//@ts-ignore
router.patch("/post/:id",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { title, content} = req.body;
        const { data } = await service.updatePostById(id as string,{ title, description: content, _author_id: req.user._id});
        return res.json(data);
    } catch (err) {
        next(err);
    }
});
//@ts-ignore
router.delete("/post/:id",isAuthenticated, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { data } = await service.deletePostById(id as string);
        return res.json(data);
    } catch (err) {
        next(err);
    }
});


export default router;