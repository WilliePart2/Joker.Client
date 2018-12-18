import { Proxy } from "../../../PureMVCMulticore/core/pureMVC/Proxy";
import { IUserDocument, IUserObject } from "../../../interfaces/db/user.interfaces";
import { userModel } from "../../../models/user.model";

export class AuthenticationService extends Proxy {
    static NAME = 'AuthenticationService';
    async fakeUserAuthenticate (): Promise<IUserDocument> {
        let user: IUserDocument = await userModel.findOne() as IUserDocument;
        if (!user) {
            user = await userModel.create({name: 'Player'} as IUserObject) as IUserDocument;
        }

        return user as IUserDocument;
    }
}
