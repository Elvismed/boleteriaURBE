'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const queries = require('../utils/SQL');
const Butaca = require('../models/butaca.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


// query de butaca por estado
// query de butaca por por persona



app.post('/butaca', (req, res) => {
    let data = new Butaca(
        req.body.ubicacion,
        req.body.codigo_butaca,
        req.body.fkarea
    );
    conn.query(queries.postButaca, data, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            result,
            message: 'Se ha agregado exitosamente'
        });
    });
});

module.exports = app;