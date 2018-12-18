import App, {Express} from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan'
import serveStatic from 'serve-static';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { AppStartup } from "./app.startup";
import { CONNECTION_URL, DB_OPTIONS } from "./config/db.config";

let {server, game} = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, './config/client.config.json'), {encoding: 'utf8'})
);

let expressApp: Express = App();
expressApp.use((req, res, next) => {
    console.log(req.path);
    next();
});

expressApp.use(morgan('tiny'));
expressApp.use(bodyParser.json());
expressApp.use('/Joker.PureMVC.Game', serveStatic(path.join(__dirname, './../../Joker.PureMVC.Game')));
expressApp.use('/assets', serveStatic(path.resolve(__dirname, '../assets')));
expressApp.use(serveStatic(path.join(__dirname, './'), {
    'index': `index.html`
}));

mongoose.connect(CONNECTION_URL, DB_OPTIONS).then(() => {
    let mainApp = new AppStartup()
        .startupApp(expressApp);
});

expressApp.listen(server.port, () => {
    console.log(`Client running on ${server.port} port.`);
});
