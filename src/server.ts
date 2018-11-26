import Express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan'
import serveStatic from 'serve-static';
let nodemon = require('nodemon');
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

// Need to kill process with ts-node
// process.on('SIGINT', () => {
//     nodemon.emit('quit');
//     process.exit(0);
// });
// process.on('SIGHUP', () => process.exit());
// process.on('SIGTERM', () => process.exit());
// process.on('SIGUSR2', () => process.exit());
// process.on('exit', (code) => {
//     nodemon.emit('quit');
//     process.exit(code)
// });
// process.on('message', (msg) => console.log(msg));


