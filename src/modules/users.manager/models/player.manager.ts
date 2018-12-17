import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { IPlayerDocument } from "../../../interfaces/db/player.interfaces";
import { isDevelopment } from "../../../libs/utils/is.development";
import { playerModel } from "../../../models/player";
import { ObjectId } from "bson";

export class PlayerManager extends Proxy {
    createFakePlayer (): Promise<IPlayerDocument> {
        return new Promise((resolve, reject) => {
            if (isDevelopment()) {
                playerModel.findOne((err: any, playerDoc: IPlayerDocument) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (playerDoc) {
                            resolve(playerDoc);
                        } else {
                            let newPlayer: IPlayerDocument = {
                                userId: new ObjectId()
                            };
                        }
                    }
                })
            }
        });
    }
}
