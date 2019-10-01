'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const queries = require('../utils/SQL');
const Ticket = require('../models/ticket.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/ticket', (req, res) => {
    let data = new Ticket(
        req.body.idticket,
        req.body.codigo,
        req.body.estado_idestado,
        req.body.factura_idfactura
    );
    conn.query(queries.postTicket, data, (err, result) => {
        if (err) {
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