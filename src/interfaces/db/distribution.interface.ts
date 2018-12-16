import mongoose, { Document } from "mongoose";

export interface IDistributionDocument extends Document {
    isFinished: boolean;
    mainPlayer: mongoose.Schema.Types.ObjectId;
    gameId: mongoose.Schema.Types.ObjectId;
}
