import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { Module } from "../../core/Module";
import { Express, Request, Response } from "express";
import { IRouteNotification, IStartupData } from "../../../app.common.interfaces";
import { RouteSignInToGameRoomCommand } from "./route.sign.in.to.game.room.command";
import { RouteAuthenticateUser, RouteSignInToGameRoom, RouteSubscribeToGameState } from "../router.notifications";
import { RouteAuthenticateUserCommand } from "./route.authenticate.user.command";
import { RouteSubscribeToGameStateUpdatesCommand } from "./route.subscribe.to.game.state.updates.command";

export class RouterStartupCommand extends Module {
    async execute(notification: Notification<IStartupData>): Promise<any> {
        super.execute(notification);

        let nBody: IStartupData = notification.body,
            context: Express = nBody.context;

        this.registerRouteHandlers(context);
    }

    registerCommands () {
        this.facade().registerCommand(RouteSignInToGameRoom, RouteSignInToGameRoomCommand);
        this.facade().registerCommand(RouteAuthenticateUser, RouteAuthenticateUserCommand);
        this.facade().registerCommand(RouteSubscribeToGameState, RouteSubscribeToGameStateUpdatesCommand);
    }

    registerRouteHandlers (context: Express) {
        this.registerHandler(context, '/sign-in-to-room', RouteSignInToGameRoom);
        this.registerHandler(context, '/authenticate', RouteAuthenticateUser);
        this.registerHandler(context, '/subscribe-to-game-state', RouteSubscribeToGameState)
    }

    private registerHandler (ctx: Express, route: string, notification: Notification<any>): void {
        ctx.use(route, (req: Request, res: Response, next: Function) => {
            this.facade().sendNotification(notification, {
                req: req,
                res: res,
                next: next
            } as IRouteNotification);
        });
    }
}
