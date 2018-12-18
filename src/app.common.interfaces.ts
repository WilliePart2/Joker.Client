import { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

export interface IExpressNotification {
    context: Express,
}

export interface IStartupData extends IExpressNotification {

}

export interface IRouteNotification {
    req: Request;
    res: Response;
    next: Function;
}

export type IMongooseObjectId = mongoose.Schema.Types.ObjectId;
