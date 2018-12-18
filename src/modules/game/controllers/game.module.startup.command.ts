import { Module } from "../../core/Module";
import { SharedCreateGame, SharedGetActiveGame } from "../../../shared.notifications/shared.game.module.notifications";
import { CreateGameCommand } from "./create.game.command";
import { GameService } from "../models/game.service";
import { GetActiveGameCommand } from "./get.active.game.command";

export class GameModuleStartupCommand extends Module {
    registerSharedCommands() {
        this.facade().registerCommand(SharedCreateGame, CreateGameCommand);
        this.facade().registerCommand(SharedGetActiveGame, GetActiveGameCommand);
    }

    registerProxies() {
        this.facade().registerProxy(GameService.NAME, GameService);
    }
}
