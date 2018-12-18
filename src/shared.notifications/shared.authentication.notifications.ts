import { Notification } from "../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../app.common.interfaces";

export const SharedAuthenticateUser = Notification.getInstance<IRouteNotification>('SHARED_AUTHENTICATE_USER');
