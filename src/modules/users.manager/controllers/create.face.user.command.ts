import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { UserManager } from "../models/user.manager";
import { IUserDocument } from "../../../interfaces/db/user.interfaces";

export class CreateFaceUserCommand extends BaseCommand {
    async execute(notification: Notification<any>): Promise<any> {
        let userManager: UserManager = this.facade().retrieveProxy(UserManager.NAME) as UserManager;

        try {
            let user: IUserDocument = await userManager.createFakeUser();
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
