import { Notification } from "./PureMVCMulticore/core/pureMVC/notification/Notification";
import { IStartupData } from "./app.common.interfaces";

export const Router = Notification.getInstance<IStartupData>('ROUTER');
export const GameFlow = Notification.getInstance('GAME_FLOW');
export const UserManager = Notification.getInstance('USER_MANAGER');
export const GameRoom = Notification.getInstance('GAME_ROOM');
