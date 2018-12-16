import mongoose, { Document } from "mongoose";
import { TTableType } from "../../libs/types.map";

export interface ITableDocument extends Document {
    type: TTableType;
    owner: mongoose.Schema.Types.ObjectId;
}
