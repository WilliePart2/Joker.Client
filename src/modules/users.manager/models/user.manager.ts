import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { IUserDocument, IUserObject } from "../../../interfaces/db/user.interfaces";
import { isDevelopment } from "../../../libs/utils/is.development";
import { userModel } from "../../../models/user.model";

export class UserManager extends Proxy {
    static NAME = 'UserManager';
    createFakeUser (): Promise<IUserDocument> {
        return new Promise((resolve, reject) => {
            if (isDevelopment()) {
                userModel.findOne((err: any, userDoc: IUserDocument) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (userDoc) {
                            resolve(userDoc);
                        } else {
                            userModel.create({name: 'Willie'} as IUserObject, (err: any, userDoc: IUserDocument) => {
                                resolve(userDoc);
                            })
                        }
                    }
                });
            }
        });
    }
}
