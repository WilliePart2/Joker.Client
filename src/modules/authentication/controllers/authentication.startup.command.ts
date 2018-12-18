import { Module } from "../../core/Module";
import { SharedAuthenticateUser } from "../../../shared.notifications/shared.authentication.notifications";
import { AuthenticateUserCommand } from "./authenticate.user.command";
import { AuthenticationService } from "../models/authentication.service";

export class AuthenticationStartupCommand extends Module {
    registerCommands () {
        this.facade().registerCommand(SharedAuthenticateUser, AuthenticateUserCommand);
    }

    registerProxies () {
        this.facade().registerProxy(AuthenticationService.NAME, AuthenticationService);
    }
}
