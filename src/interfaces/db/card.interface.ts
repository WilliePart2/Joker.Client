import { Document } from "mongoose";

export interface ICardDocument extends Document {
    identifier: number;
    suit: string;
}
