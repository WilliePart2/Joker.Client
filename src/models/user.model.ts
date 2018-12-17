import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export const userModel = mongoose.model('user', userSchema);
