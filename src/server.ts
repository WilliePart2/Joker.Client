import App, {Express} from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan'
import serveStatic from 'serve-static';
import { AppStartup } from "./app.startup";

let {server, game} = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, './config/client.config.json'), {encoding: 'utf8'})
);

let expressApp: Express = App();
let mainApp = new AppStartup()
    .startupApp(expressApp)
    .then(() => {
        expressApp.use(morgan('tiny'));

        expressApp.use('/Joker.PureMVC.Game', serveStatic(path.join(__dirname, './../../Joker.PureMVC.Game')));
        expressApp.use('/assets', serveStatic(path.resolve(__dirname, '../assets')));
        expressApp.use(serveStatic(path.join(__dirname, './'), {
            'index': `index.html`
        }));


        expressApp.listen(server.port, () => {
            console.log(`Client running on ${server.port} port.`);
        });

    });
