import { IPlayerSubscription } from "../game.flow.interfaces";
import { IMongooseObjectId } from "../../../app.common.interfaces";

export class PlayerConnectionsManager {
    private _storage: IPlayerSubscription[] = [];

    addPlayerConnection (playerSubscriptionData: IPlayerSubscription): void {
        this._storage.push(playerSubscriptionData);
    }

    getPlayerConnection (userId: IMongooseObjectId, tableId: IMongooseObjectId): IPlayerSubscription[] {
        return this._storage.filter((subscription: IPlayerSubscription) => {
            return subscription.userId === userId && subscription.tableId === tableId;
        });
    }

    removePlayerConnection (userId: IMongooseObjectId): void {
        this._storage = this._storage.filter((subscription: IPlayerSubscription) => {
            return subscription.userId !== userId
        });
    }
}