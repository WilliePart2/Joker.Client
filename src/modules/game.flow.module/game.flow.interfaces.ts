import mongoose from "mongoose";
import { Request, Response } from "express";

export interface IPlayerSubscriptionData {
    userId: mongoose.Schema.Types.ObjectId;
    tableId: mongoose.Schema.Types.ObjectId;
    lastEventId?: number;
}

export interface IPlayerSubscription extends IPlayerSubscriptionData {
    messagesCounter?: number;
    res: Response;
    req: Request;
    // gameId: mongoose.Schema.Types.ObjectId; I think that we don't need this property
}
