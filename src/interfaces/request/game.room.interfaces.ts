import mongoose from "mongoose";

export interface ISignInToGameRoomData {
    gameRoomId: mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId;
}