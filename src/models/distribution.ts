import mongoose, { Schema } from "mongoose";

export const distributionSchema = new Schema({
    isFinished: {
        type: Boolean,
        required: true
    },
    mainPlayer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

export const distributionModel = mongoose.model('distribution', distributionSchema);
