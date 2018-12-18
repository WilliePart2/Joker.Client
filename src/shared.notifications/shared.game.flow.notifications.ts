import { Notification } from "../PureMVCMulticore/core/pureMVC/notification/Notification";
import { IPlayerSubscription } from "../modules/game.flow.module/game.flow.interfaces";

export const SharedUpdateGameState = Notification.getInstance('UPDATE_GAME_STATE');
export const SharedHandleNewConnection = Notification.getInstance('SHARED_HANDLE_NEW_CONNECTION');
export const SharedHandleNewSubscription = Notification.getInstance<IPlayerSubscription>('SHARED_HANDLE_NEW_SUBSCRIPTION');
