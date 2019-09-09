const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const Reserva = require('../models/reservas.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/reserva', (req, res) => {
    let data = new Reserva(
        req.body.id_reserva,
        req.body.fecha_reserva,
        req.body.fecha_limite,
        req.body.id_usuario,
        req.body.id_estado
    );
    conn.query('INSERT INTO reservas SET ?', data, (err, result) => {
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