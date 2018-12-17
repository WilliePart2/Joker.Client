import { Document } from "mongoose";

export interface IUserObject {
    name: string;
}

export interface IUserDocument extends IUserObject, Document {}
