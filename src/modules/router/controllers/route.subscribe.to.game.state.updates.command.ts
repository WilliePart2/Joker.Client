import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../../app.common.interfaces";
import { GameFlow } from "../../../app.modules";
import { SharedHandleNewSubscription } from "../../../shared.notifications/shared.game.flow.notifications";
import { Request, Response } from "express";
import URL from 'url';
import { IPlayerSubscription, IPlayerSubscriptionData } from "../../game.flow.module/game.flow.interfaces";

export class RouteSubscribeToGameStateUpdatesCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        let nBody: IRouteNotification = notification.body,
            response: Response = nBody.res,
            request: Request = nBody.req,
            queryData: IPlayerSubscriptionData = (URL.parse(nBody.req.url, true).query as unknown) as IPlayerSubscription,
            playerSubscription: IPlayerSubscription = {
                messagesCounter: queryData.lastEventId || 0,
                res: response,
                req: request,
                ...queryData
            };

        response.writeHead(200, {
            'Content-Type': 'text/event-stream'
        });

        await this.sendNotficationToModule(GameFlow, SharedHandleNewSubscription, playerSubscription);
    }
}
