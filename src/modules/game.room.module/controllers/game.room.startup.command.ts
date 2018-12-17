import { Module } from "../../core/Module";
import { GameRoomManager } from "../models/game.room.manager";
import { SignInToGameRoom } from "../game.room.notifications";
import { SignInToGameRoomCommand } from "./sign.in.to.game.room.command";

export class GameRoomStartupCommand extends Module {
    registerCommands () {
        this.facade().registerCommand(SignInToGameRoom, SignInToGameRoomCommand);
    }

    registerProxies () {
        this.facade().registerProxy(GameRoomManager.NAME, GameRoomManager);
    }
}
