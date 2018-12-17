import { Module } from "../../core/Module";
import { UpdateGameStateCommand } from "./update.game.state.command";
import { SharedUpdateGameState } from "../../../shared.notifications/shared.game.flow.notifications";
import { UserCommunicationsService } from "../models/user.communications.service";

export class GameFlowStartupCommand extends Module {
    registerSharedCommands () {
        this.facade().registerCommand(SharedUpdateGameState, UpdateGameStateCommand)
    }

    registerProxies () {
        this.facade().registerProxy(UserCommunicationsService.NAME, UserCommunicationsService);
    }
}
