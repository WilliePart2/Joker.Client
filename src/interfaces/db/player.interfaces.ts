import mongoose, { Document } from "mongoose";
import { ICardDocument } from "./card.interface";

/**
 * Player object create for each game
 */
export interface IPlayerDocument extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    gameId: mongoose.Schema.Types.ObjectId;
    cards: Array<ICardDocument>;
}
