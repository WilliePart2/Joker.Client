import { Module } from "../../core/Module";
import { UpdateGameStateCommand } from "./update.game.state.command";
import {
    SharedHandleNewConnection, SharedHandleNewSubscription,
    SharedUpdateGameState
} from "../../../shared.notifications/shared.game.flow.notifications";
import { GameFlowService } from "../models/game.flow.service";
import { HandleNewConnectionCommand } from "./handle.new.connection.command";
import { HandleSubscriptionToGameState } from "./handle.subscription.to.game.state";

export class GameFlowStartupCommand extends Module {
    registerSharedCommands () {
        this.facade().registerCommand(SharedUpdateGameState, UpdateGameStateCommand);
        // this.facade().registerCommand(SharedHandleNewConnection, HandleNewConnectionCommand);
        this.facade().registerCommand(SharedHandleNewSubscription, HandleSubscriptionToGameState);
    }

    registerProxies () {
        this.facade().registerProxy(GameFlowService.NAME, GameFlowService);
    }
}
