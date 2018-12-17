import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { UserManager } from "../../../app.modules";
import { CreateFakeUser } from "../../users.manager/user.manager.notifications";
import { IUserDocument } from "../../../interfaces/db/user.interfaces";
import { isDevelopment } from "../../../libs/utils/is.development";
import { ITableDocument } from "../../../interfaces/db/table.interfaces";
import { GameRoomManager } from "../models/game.room.manager";
import { IRouteNotification } from "../../../app.common.interfaces";

/**
 * Main command for manage game flow after user sign in in room
 */
export class SignInToGameRoomCommand extends BaseCommand {

    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        if (isDevelopment()) {
            let gameRoomManager: GameRoomManager = this.facade().retrieveProxy(GameRoomManager.NAME) as GameRoomManager;
            let user: IUserDocument = await this.sendNotficationToModule(UserManager, CreateFakeUser);
            let gameTable: ITableDocument = await gameRoomManager.createFakeGameRoom(user);
            return gameTable;
        }
    }
}
