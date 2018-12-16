import mongoose, { Schema } from "mongoose";
import { TTableType } from "../libs/types.map";

export const tableSchema = new Schema({
    type: {
        type: String,
        enum: [
            TTableType.ONE_GAME,
            TTableType.TWO_GAME,
            TTableType.THREE_GAME,
            TTableType.FOUR_GAME
        ],
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

export const tableModel = mongoose.model('table', tableSchema);
