import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { isDevelopment } from "../../../libs/utils/is.development";
import { AuthenticationService } from "../models/authentication.service";
import { IUserDocument } from "../../../interfaces/db/user.interfaces";
import { IRouteNotification } from "../../../app.common.interfaces";
import { Response } from "express";

export class AuthenticateUserCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        let nBody: IRouteNotification = notification.body,
            response: Response = nBody.res;

        if (isDevelopment()) {
            try {
                let authService: AuthenticationService = this.facade().retrieveProxy(AuthenticationService.NAME) as AuthenticationService,
                    user: IUserDocument = await authService.fakeUserAuthenticate();

                return user;
            } catch (e) {
                response.sendStatus(500);
                console.error(e);
            }
        }

        response.end();
    }
}
