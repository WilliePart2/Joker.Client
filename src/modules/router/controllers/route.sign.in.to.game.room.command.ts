import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../../app.common.interfaces";
import { ISignInToGameRoomData } from "../../../interfaces/request/game.room.interfaces";
import { GameRoom } from "../../../app.modules";
import { SignInToGameRoom } from "../../game.room.module/game.room.notifications";
import { Response } from "express";

export class RouteSignInToGameRoomCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        try {
            let nBody: IRouteNotification = notification.body,
                response: Response = nBody.res,
                roomData: ISignInToGameRoomData = await this.sendNotficationToModule(GameRoom, SignInToGameRoom);

            response.json(roomData);
        } catch (error) {
            console.log(error);
        }
    }
}
