import { Module } from "../../core/Module";
import { CreateFakeUser } from "../user.manager.notifications";
import { CreateFaceUserCommand } from "./create.face.user.command";
import { UserManager } from "../models/user.manager";

export class UserManagerStartupCommand extends Module {
    registerCommands () {
        this.facade().registerCommand(CreateFakeUser, CreateFaceUserCommand);
    }

    registerProxies () {
        this.facade().registerProxy(UserManager.NAME, UserManager);
    }
}
