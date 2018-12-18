import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../../app.common.interfaces";
import { ISignInToGameRoomData } from "../../../interfaces/common/game.room.interfaces";

export class HandleNewConnectionCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        let nBody: IRouteNotification = notification.body,
            requestData: ISignInToGameRoomData = nBody.req.body;

    }
}
