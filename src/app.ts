import cors from 'cors';
import express from 'express';
import http, { Server } from 'http';
import logger from 'morgan';
import initDB from './db/db'
import createError from "http-errors"
import config from "./config/config"
import { userRoutes, postRoutes ,followRoute} from './router';
class Express{
    public app: express.Application;
    public server: Server;
    
    constructor(){
        this.app = express();
        this.server = http.createServer(this.app);
        initDB();
        this.initializeMiddlewares();
    }
    
    private initializeMiddlewares(): void{
        this.app.use(logger('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(userRoutes);
        this.app.use(postRoutes);
        this.app.use(followRoute);

        this.app.use((req, res, next) => {
            next(createError(404));
        });

    }

    public listen(): void{
        this.server.listen(config.server.port, () => {
            console.log(`Server running on port ${config.server.port}`);
        });
    }
}

export default Express;