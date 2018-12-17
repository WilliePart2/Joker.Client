import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";

/**
 * this command will contain user connections and update game state for players in certain room
 * for brevity i will use "long poling" algorithm and then i swap it by web socket
 */
export class UpdateGameStateCommand extends BaseCommand {
    async execute(notification: Notification<any>): Promise<any> {
        return super.execute(notification);


    }
}
