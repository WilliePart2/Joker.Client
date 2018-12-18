import { TGameStateTypes, TTableType } from "../../libs/types.map";
import { IMongooseObjectId } from "../../app.common.interfaces";

export interface IGameQuery {
    tableId: IMongooseObjectId;
}

export interface ICreateGameData extends IGameQuery{
    tableType: TTableType;
}

export interface IGameInfo {
    isFinished: boolean;
    gameState: TGameStateTypes;
}