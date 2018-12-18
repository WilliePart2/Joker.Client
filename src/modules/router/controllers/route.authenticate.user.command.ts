import { BaseCommand } from "../../../PureMVCMulticore/core/pureMVC/command/BaseCommand";
import { Notification } from "../../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../../app.common.interfaces";
import { AuthenticationModule } from "../../../app.modules";
import { SharedAuthenticateUser } from "../../../shared.notifications/shared.authentication.notifications";
import { IUserDocument } from "../../../interfaces/db/user.interfaces";
import { Response } from "express";
import {
    ICommonResponse,
    IUserAuthenticationResponse
} from "../interfaces/router.response.interfaces";
import { TResponseTypes } from "../../../libs/types.map";

export class RouteAuthenticateUserCommand extends BaseCommand {
    async execute(notification: Notification<IRouteNotification>): Promise<any> {
        let nBody: IRouteNotification = notification.body,
            response: Response = nBody.res,
            user: IUserDocument = await this.sendNotficationToModule(AuthenticationModule, SharedAuthenticateUser, notification.body);

        if (user) {
            response.json({
                status: TResponseTypes.SUCCESS,
                payload: {
                    user: {
                        id: user._id,
                        name: user.name
                    }
                }
            } as IUserAuthenticationResponse);
        } else {
            response.json({ status: TResponseTypes.NOT_FOUND } as ICommonResponse);
        }
    }
}
