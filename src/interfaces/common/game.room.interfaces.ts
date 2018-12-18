import mongoose from "mongoose";
import { TTableType } from "../../libs/types.map";
import { IGameInfo } from "./game.manipulation.interfaces";

export interface ISignInToGameRoomData {
    gameRoomId: mongoose.Schema.Types.ObjectId;
    type: TTableType;
    ownerId: mongoose.Schema.Types.ObjectId;
    game: IGameInfo;
}
