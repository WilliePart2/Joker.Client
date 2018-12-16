import mongoose, { Document } from "mongoose";

export interface IGameDocument extends Document {
    tableId: mongoose.Schema.Types.ObjectId;
    maximumRounds: number;
}
