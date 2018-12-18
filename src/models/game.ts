import mongoose, { Schema } from "mongoose";

export const gameSchema = new Schema({
    tableId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    maximumRounds: {
        type: Number,
        required: true
    },
    isFinished: {
        type: Boolean,
        required: true
    },
    gameState: {
        type: Number,
        required: true
    }
});

export const gameModel = mongoose.model('game', gameSchema);
