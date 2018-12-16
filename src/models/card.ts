import mongoose, { Schema } from "mongoose";
import { TCardSuits } from "../libs/types.map";

export const cardSchema = new Schema({
    identifier: {
        type: Number,
        required: true
    },
    suit: {
        type: String,
        enum: [
            TCardSuits.CLUBS,
            TCardSuits.DIAMONDS,
            TCardSuits.HEARTS,
            TCardSuits.SPADES
        ],
        required: true
    }
});

export const cardModel = mongoose.model('card', cardSchema);
