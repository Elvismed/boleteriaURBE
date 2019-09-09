const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const Estado = require('../models/estado.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/estado', (req, res) => {
    let data = new Estado(
        req.body.id_estado,
        req.body.estado,
    );
    conn.query('INSERT INTO estado SET ?', data, (err, result) => {
        if(err) {
            res.status(400).json({
                ok: false,
                err
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