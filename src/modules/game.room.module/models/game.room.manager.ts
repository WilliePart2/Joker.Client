import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { isDevelopment } from "../../../libs/utils/is.development";
import { tableModel } from "../../../models/table";
import { ITableDocument, ITableObject } from "../../../interfaces/db/table.interfaces";
import { TTableType } from "../../../libs/types.map";
import { IUserDocument } from "../../../interfaces/db/user.interfaces";

export class GameRoomManager extends Proxy {
    static NAME = 'GameRoomManager';

    createFakeGameRoom (userDoc: IUserDocument): Promise<ITableDocument> {
        return new Promise((resolve, reject) => {
            if (isDevelopment()) {
                tableModel.findOne((err: any, gameRoom: ITableDocument) => {
                    if (err) {
                        reject(err);
                    }

                    if (gameRoom) {
                        resolve(gameRoom);
                    } else {
                        tableModel.create({
                            type: TTableType.ONE_GAME,
                            owner: userDoc._id
                        } as ITableObject, (err: any, gameTableDoc: ITableDocument) => {
                            resolve(gameTableDoc);
                        })
                    }
                });
            }
        });
    }
}
