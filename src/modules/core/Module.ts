import { BaseCommand } from "../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../PureMVCMulticore/core/pureMVC/notification/Notification";

export class Module extends BaseCommand {
    async execute(notification: Notification<any>): Promise<any> {
        super.execute(notification);

        this.registerCommands();
        this.registerSharedCommands();
        this.registerProxies();
        this.registerMediators();
    }

    registerCommands () {

    }

    registerSharedCommands () {

    }

    registerProxies () {

    }

    registerMediators () {

    }
}

