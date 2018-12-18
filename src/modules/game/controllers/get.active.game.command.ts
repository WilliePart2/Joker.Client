import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { IGameQuery } from "../../../interfaces/common/game.manipulation.interfaces";
import { IGameDocument } from "../../../interfaces/db/game.interface";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { GameService } from "../models/game.service";

export class GetActiveGameCommand extends BaseCommand {
    async execute(notification: Notification<IGameQuery>): Promise<IGameDocument> {
        let nBody: IGameQuery = notification.body,
            gameService: GameService = this.facade().retrieveProxy(GameService.NAME) as GameService;

        try {
            let gameDoc: IGameDocument = await gameService.findActiveGameByTableId(nBody.tableId);
            return gameDoc || null;
        } catch (e) {
            return null;
            console.error(e);
        }
    }
}
