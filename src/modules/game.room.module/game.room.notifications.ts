import { Notification } from "../../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IRouteNotification } from "../../app.common.interfaces";

export const SignInToGameRoom = Notification.getInstance<IRouteNotification>('SIGN_IN_TO_GAME_ROOM');
