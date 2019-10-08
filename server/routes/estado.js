'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Estado = require('../models/estado.model');
const queries = require('../utils/SQL');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// app.get('/estado/:estado', (req, res) => {

// });

app.post('/estado/:id', (req, res) => {
    let data = new Estado(
        req.body.estado,
        req.body.fkbutaca
    );
    conn.query(queries.postEstado, data, (err, result) => {
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
app.put('/estado/:id', async(req, res) => {
    let idestado = req.params.id;
    let data = _.pick(req.body, ['estado']);

    conn.query(queries, await [data, idestado], (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result: result,
            message: 'Evento cambiado'
        });
    });
});

module.exports = app;