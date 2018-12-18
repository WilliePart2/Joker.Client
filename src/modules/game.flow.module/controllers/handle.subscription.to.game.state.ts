import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IPlayerSubscription } from "../game.flow.interfaces";
import { GameFlowService } from "../models/game.flow.service";

export class HandleSubscriptionToGameState extends BaseCommand {
    async execute(notification: Notification<IPlayerSubscription>): Promise<any> {
        let nBody: IPlayerSubscription = notification.body,
            gameFlowService: GameFlowService = this.facade().retrieveProxy(GameFlowService.NAME) as GameFlowService;

        gameFlowService.manageUserSubscription(nBody);
    }
}
