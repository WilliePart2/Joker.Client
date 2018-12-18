import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IGameDocument } from "../../../interfaces/db/game.interface";
import { ICreateGameData } from "../../../interfaces/common/game.manipulation.interfaces";
import { GameService } from "../models/game.service";

export class CreateGameCommand extends BaseCommand {
    async execute(notification: Notification<ICreateGameData>): Promise<IGameDocument> {
        let nBody: ICreateGameData = notification.body,
            gameService: GameService = this.facade().retrieveProxy(GameService.NAME) as GameService;

        try {
            let gameDoc: IGameDocument = await gameService.createGameWithinGameTable(nBody.tableId, nBody.tableType);
            return gameDoc || null;
        } catch (e) {
            return null;
            console.error(e);
        }
    }
}
