import mongoose, { Document } from "mongoose";
import { TTableType } from "../../libs/types.map";

export interface ITableObject {
    type: TTableType;
    owner: mongoose.Schema.Types.ObjectId;
}

export interface ITableDocument extends ITableObject, Document {}
