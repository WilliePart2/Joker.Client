import { Express } from "express";
import { Notification } from "./PureMVCMulticore/core/pureMVC/notification/Notification";
import { Command } from "./PureMVCMulticore/core/pureMVC/command/Command";
import { Facade } from "./PureMVCMulticore/core/pureMVC/facade/Facade";
import { AuthenticationModule, GameFlow, GameModule, GameRoom, Router, UserManager } from "./app.modules";
import { RouterStartupCommand } from "./modules/router/controllers/router.startup.command";
import { GameFlowStartupCommand } from "./modules/game.flow.module/controllers/game.flow.startup.command";
import { UserManagerStartupCommand } from "./modules/users.manager/controllers/user.manager.startup.command";
import { GameRoomStartupCommand } from "./modules/game.room.module/controllers/game.room.startup.command";
import { AuthenticationStartupCommand } from "./modules/authentication/controllers/authentication.startup.command";
import { GameModuleStartupCommand } from "./modules/game/controllers/game.module.startup.command";

export class AppStartup {
    async startupApp (app: Express) {
        await this.startupMainGameModules(app);
        await this.startupGameModules();
    }

    private async startupMainGameModules (app: Express) {
        await this.startupModule(Router, RouterStartupCommand, {context: app});
    }


    private async startupGameModules () {
        await this.startupModule(AuthenticationModule, AuthenticationStartupCommand);
        await this.startupModule(GameFlow, GameFlowStartupCommand);
        await this.startupModule(UserManager, UserManagerStartupCommand);
        await this.startupModule(GameRoom, GameRoomStartupCommand);
        await this.startupModule(GameModule, GameModuleStartupCommand);
    }

    private async startupModule <T extends Notification<any>>(moduleNotification: T, moduleCommand: typeof Command, initData?: T[keyof T]) {
        let moduleFacade: Facade = Facade.getInstance(moduleNotification.name);
        moduleFacade.registerCommand(moduleNotification, moduleCommand);
        await moduleFacade.sendNotification(moduleNotification, initData);
    }
}
