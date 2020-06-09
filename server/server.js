require('./config/config');
require('./routes/usuario')

const express = require('express');
const mongoose = require('mongoose');


const app = express();


// Body parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// configuracion global de rutas
app.use(require('./routes/index.js'));


mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },

    (err, res) => {

        if (err) throw err;
        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', 3000);
});