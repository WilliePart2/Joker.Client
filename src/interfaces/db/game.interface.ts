import mongoose, { Document } from "mongoose";
import { TGameStateTypes } from "../../libs/types.map";

export interface IGameData {
    tableId: mongoose.Schema.Types.ObjectId;
    maximumRounds: number;
    isFinished: boolean;
    gameState: TGameStateTypes;
}

export interface IGameDocument extends IGameData, Document {
    // tableId: mongoose.Schema.Types.ObjectId;
    // maximumRounds: number;
    // isFinished: boolean;
    // gameState: TGameStateTypes;
}
