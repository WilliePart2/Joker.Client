import { IMongooseObjectId } from "../../../app.common.interfaces";
import { TResponseTypes } from "../../../libs/types.map";

export interface ICommonResponse<T = any> {
    status: TResponseTypes;
    payload?: T;
}

interface IUserRespObj {
    id: IMongooseObjectId;
    name: string;
}
// export interface IUserObjResponse extends ICommonResponse<IUserRespObj> {}

export interface IUserAuthenticationResponse extends ICommonResponse<{user: IUserRespObj}> {

}