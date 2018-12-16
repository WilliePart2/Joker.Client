import Express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan'
import serveStatic from 'serve-static';
let {server, game} = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, './config/client.config.json'), {encoding: 'utf8'})
);

let app: Express.Application = Express();
app.use(morgan('tiny'));

app.use('/Joker.PureMVC.Game', serveStatic(path.join(__dirname, './../../Joker.PureMVC.Game')));
app.use('/assets', serveStatic(path.resolve(__dirname, '../assets')));
app.use(serveStatic(path.join(__dirname, './'), {
    'index': `index.html`
}));

app.listen(server.port, () => {
    console.log(`Client running on ${server.port} port.`);
});
