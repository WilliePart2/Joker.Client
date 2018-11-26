let express = require('express');
let fs = require('fs');
let path = require('path');
let morgan = require('morgan');
let serveStatic = require('serve-static');
let {server, game} = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, './client.config.json'))
);

let app = express();
app.use(morgan('tiny'));

app.use('/Joker.PureMVC.Game', serveStatic(path.join(__dirname, './../Joker.PureMVC.Game')));
app.use(serveStatic(path.join(__dirname, './'), {
    'index': `index.html`
}));

app.listen(server.port, () => {
    console.log(`Client running on ${server.port} port.`);
});
