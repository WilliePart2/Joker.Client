import Express from 'express';
import {Facade} from "../PureMVCMulticore/core/pureMVC/facade/Facade";

export class Router extends Facade {
    init (app: Express.Application) {
        this.initializeRoutes(app);

        // this.registerCommand()
    }

    initializeRoutes (app: Express.Application) {
        app.use('/assets');
    }
}
