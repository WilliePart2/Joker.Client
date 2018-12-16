import mongoose, { Document } from "mongoose";
import { ICardDocument } from "./card.interface";

export interface ICombinationDocument extends Document {
    owner: mongoose.Schema.Types.ObjectId;
    distributionId: mongoose.Schema.Types.ObjectId;
    gameId: mongoose.Schema.Types.ObjectId;
    cards: Array<ICardDocument>;
}
