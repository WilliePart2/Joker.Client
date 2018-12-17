import { Express, Request, Response } from 'express';

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
