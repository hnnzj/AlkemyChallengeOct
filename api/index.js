var express = require('express');
var bodyParser = require('body-parser');
const routes = require('./routes/index');
const { sequelize } = require('./db');

require('./models/Movements.js');
require('./models/User.js');

var app = express();
var port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log('Connected');
        app.listen(port, function () {
            console.log(`Server running in http://localhost:3002`);
        });
    } catch (error) {
        console.error('Unable connect');
    }
}

main();
