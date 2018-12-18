import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { IMongooseObjectId } from "../../../app.common.interfaces";
import { IGameDocument } from "../../../interfaces/db/game.interface";
import { gameModel } from "../../../models/game";
import { TGameStateTypes, TTableType } from "../../../libs/types.map";

export class GameService extends Proxy {
    static NAME = 'GameService';

    async createGameWithinGameTable (tableId: IMongooseObjectId, tableType: TTableType): Promise<IGameDocument> {
        let game: IGameDocument = await gameModel.create(<IGameDocument>{
            tableId: tableId,
            maximumRounds: this.getMaxRoundsByTableType(tableType),
            isFinished: false,
            gameState: TGameStateTypes.AWAIT_STARTING
        }) as IGameDocument;

        return game;
    }

    async findActiveGameByTableId (tableId: IMongooseObjectId): Promise<IGameDocument | null> {
        let game: IGameDocument = await gameModel.findOne({
            tableId: tableId,
            isFinished: false
        }) as IGameDocument;

        if (!game) {
            return null;
        }

        return game;
    }

    private getMaxRoundsByTableType (tableType: TTableType): number {
        switch (tableType) {
            case TTableType.ONE_GAME: return 1;
            case TTableType.TWO_GAME: return 2;
            case TTableType.THREE_GAME: return 3;
            case TTableType.FOUR_GAME: return 4;
        }
    }
}
