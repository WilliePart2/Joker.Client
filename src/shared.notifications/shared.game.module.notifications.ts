import { Notification } from "../PureMVCMulticore/core/pureMVC/notification/Notification";
import { ICreateGameData, IGameQuery } from "../interfaces/common/game.manipulation.interfaces";

export const SharedCreateGame = Notification.getInstance<ICreateGameData>('SHARED_CREATE_GAME');
export const SharedGetActiveGame = Notification.getInstance<IGameQuery>('SHARED_GET_ACTIVE_GAME_COMMAND');
