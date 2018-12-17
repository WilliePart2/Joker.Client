import { Notification } from "../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../app.common.interfaces";

export const RouteSignInToGameRoom = Notification.getInstance<IRouteNotification>('ROUTE_SIGN_IN_TO_GAME_ROOM');
