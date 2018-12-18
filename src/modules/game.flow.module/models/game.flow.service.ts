import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { IPlayerSubscription } from "../game.flow.interfaces";
import { PlayerConnectionsManager } from "./player.connections.manager";
import { IMongooseObjectId } from "../../../app.common.interfaces";
import { TGameStateTypes, TUserGameActionTypes } from "../../../libs/types.map";

export class GameFlowService extends Proxy {
    static NAME = 'GameFlowService';
    private _playerConnections: PlayerConnectionsManager = new PlayerConnectionsManager();

    manageUserSubscription (subscriptionData: IPlayerSubscription): void {
        this._playerConnections.addPlayerConnection(subscriptionData);

        subscriptionData.req.on('close', () => {
            this._playerConnections.removePlayerConnection(subscriptionData.userId);
        });

        subscriptionData.req.on('error', () => {
            this._playerConnections.removePlayerConnection(subscriptionData.userId);
        });

        // setInterval(() => {
        //     this.getPlayerSubscription(subscriptionData.userId, subscriptionData.tableId)
        //         .forEach((subscription) => {
        //             return subscription.res.write(this._formatMessage(JSON.stringify({msg: 'Hello world'})));
        //         });
        // }, 1000);
        //
        // console.log(process.memoryUsage().heapUsed);
    }

    updateGameState (gameState: TGameStateTypes, tableId: IMongooseObjectId, userActionType: TUserGameActionTypes, userActionData: any, userId: IMongooseObjectId) {
        switch (gameState) {
            case TGameStateTypes.AWAIT_STARTING:
                this.onAwaitStartingUpdate();
                break;
            case TGameStateTypes.PLAYERS_CHOOSE_PLACE:
                this.onPlayersChoosePlaceUpdate();
                break;
        }
    }

    onAwaitStartingUpdate () {

    }

    onPlayersChoosePlaceUpdate () {

    }

    private changeGameState () {

    }

    private _sendGameStateNotificationToUser (userId: IMongooseObjectId, tableId: IMongooseObjectId): void {

    }

    private _getPlayerSubscription (userId: IMongooseObjectId, tableId: IMongooseObjectId): IPlayerSubscription[] {
        return this._playerConnections.getPlayerConnection(userId, tableId);
    }

    private _formatMessage (msg: string): string {
        return `data: ${msg} \n\n`;
    }
}
