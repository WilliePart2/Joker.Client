import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { Module } from "../../core/Module";
import { Express, Request, Response } from "express";
import { IRouteNotification, IStartupData } from "../../../app.common.interfaces";
import { RouteSignInToGameRoomCommand } from "./route.sign.in.to.game.room.command";
import { RouteSignInToGameRoom } from "../router.notifications";

export class RouterStartupCommand extends Module {
    async execute(notification: Notification<IStartupData>): Promise<any> {
        return super.execute(notification);

        let nBody: IStartupData = notification.body,
            context: Express = nBody.context;

        this.registerRouteHandlers(context);
    }

    registerCommands () {
        this.facade().registerCommand(RouteSignInToGameRoom, RouteSignInToGameRoomCommand)
    }

    registerRouteHandlers (context: Express) {
        this.registerHandler(context, 'sign-in-to-room', RouteSignInToGameRoom);
    }

    private registerHandler (ctx: Express, route: string, notification: Notification<any>): void {
        ctx.use(route, (req: Request, res: Response, next: Function) => {
            this.facade().sendNotification(notification, {
                req: req,
                res: res,
                next: next
            } as IRouteNotification)
                .then(() => next());
        });
    }
}
