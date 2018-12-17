import mongoose, { Schema } from "mongoose";
import { cardSchema } from "./card";

export const playerSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cards: {
        type: [cardSchema]
    }
});

export const playerModel = mongoose.model('player', playerSchema);
