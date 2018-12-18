import { Document, Schema } from "mongoose";
import { IMongooseObjectId } from "../../app.common.interfaces";

export interface IUserObject {
    name: string;
}

export interface IUserDocument extends IUserObject, Document {}
