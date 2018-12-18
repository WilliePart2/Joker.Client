import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../../app.common.interfaces";
import { ISignInToGameRoomData } from "../../../interfaces/common/game.room.interfaces";
import { GameModule, GameRoom } from "../../../app.modules";
import { SignInToGameRoom } from "../../game.room.module/game.room.notifications";
import { Response } from "express";
import { ITableDocument } from "../../../interfaces/db/table.interfaces";
import { IGameDocument } from "../../../interfaces/db/game.interface";
import { GetActiveGameCommand } from "../../game/controllers/get.active.game.command";
import { SharedCreateGame, SharedGetActiveGame } from "../../../shared.notifications/shared.game.module.notifications";

export class RouteSignInToGameRoomCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        let nBody: IRouteNotification = notification.body,
            response: Response = nBody.res;

        try {
            let {type, owner, _id}: ITableDocument = await this.sendNotficationToModule(GameRoom, SignInToGameRoom);
            let unfinishedGame: IGameDocument = await this.sendNotficationToModule(GameModule, SharedGetActiveGame, {
                tableId: _id
            });
            let gameDoc: IGameDocument;

            /**
             * Need to handel restore game flow case
             */
            if (!unfinishedGame) {
                gameDoc = await this.sendNotficationToModule(GameModule, SharedCreateGame, {
                    tableId: _id,
                    tableType: type
                });
            } else {
                gameDoc = unfinishedGame;
            }

            response.json({
                gameRoomId: _id,
                type: type,
                ownerId: owner,
                game: {
                    gameState: gameDoc.gameState,
                    isFinished: gameDoc.isFinished
                }
            } as ISignInToGameRoomData);
        } catch (error) {
            response.sendStatus(500);
            console.log(error);
        }

        response.end();
    }
}
