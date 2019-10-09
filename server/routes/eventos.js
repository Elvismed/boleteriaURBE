    'use strict';

const express = require("express");
const conn = require("../config/db");
const bodyParse = require("body-parser");
const Evento = require("../models/evento.model");
const queries = require('../utils/SQL');
const upload = require('../middlewares/upload-images');
const _ = require('underscore');
const app = express();
const { verifyToken, verifyAdmin } = require('./../middlewares/auth');

app.use(bodyParse.json());


app.get('/eventos', (req, res) => {
    conn.query(queries.getEvento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json(result);
    });
});
app.get('/eventos/:id', (req, res) => {
    let idevento = req.params.id
    conn.query(queries, idevento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json(result);
    });
});

app.post('/evento', [verifyToken, verifyAdmin,upload], async(req, res) => {
    const body = req.body;
    let data = new Evento(
        body.nombre,
        body.fecha,
        body.hora,
        body.tipo_evento,
        body.descripcion,
        req.file.path,
        body.fkusuario,
        body.fklugar
    );
    conn.query(queries.postEvento, await data, (err, result) => {
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

app.put("/eventos/:id", [upload], async(req, res) => {
    let idevento = req.params.id;
    let data = _.pick(req.body, ['nombre', 'fecha', 'hora', 'descripcion', 'image']);
    conn.query(queries.updateEventoById, await [data, idevento], (err, result) => {
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

app.delete('/eventos/:id', (req, res) => {
    let idevento = req.params.id
    conn.query(queries.deleteEvento, idevento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result: result,
            message: 'El Evento fue eliminado'
        });
    });
});

module.exports = app;