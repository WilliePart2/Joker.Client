import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";

export class HandleNewConnectionCommand extends BaseCommand {
    async execute(notification: Notification<any>): Promise<any> {
        return super.execute(notification);
    }
}
