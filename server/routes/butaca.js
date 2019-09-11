const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const Butaca = require('../models/butaca.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/butaca', (req, res) => {
    let data = new Ticket(
        req.body.idbutacas,
        req.body.ubicacion,
        req.body.cod_butaca,
        req.body.area_idarea,
        req.body.ticket_idticket
    );
    conn.query('INSERT INTO butaca SET ?', data, (err, result) => {
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