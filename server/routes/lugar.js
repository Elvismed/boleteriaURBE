'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Lugar = require('../models/lugar.model');
const queries = require('../utils/SQL');
const upload = require('../middlewares/upload-images');
const { verifyToken, verifyAdmin } = require('./../middlewares/auth');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


/*

Base para raquetazos de telmo

// app.post('/lugar/image', [upload], (req, res) => {
//     console.log(req.file);
//     console.log(req.file.path)
//     res.json(req.file);
// });

*/

app.get('/lugar/:id', (req, res) => {
    let idlugar = req.params.id
    conn.query(queries.getLugarById, idlugar, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: 'telmo'
        })

    });
});

app.post('/lugar', [verifyToken,verifyAdmin,upload], async(req, res) => {
    let data = new Lugar(
        req.body.nombre,
        req.file.path,
       
    );
    conn.query(queries.postLugar, await data, (err, result) => {
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

app.put('/lugar/:id', [upload], async(req, res) => {
    let idLugar = req.params.id
    let data = _.pick(req.body, ['nombre', 'image', 'activo']);

    conn.query(queries.updateLugarById, await [data, idLugar], (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: 'Lugar cambiado'
        });
    });
});

app.delete('/lugar/:id', (req, res) => {
    let idLugar = req.params.id
    conn.query(queries.deleteLugar, idLugar, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: 'El Lugar fue eliminado'
        });
    });
});

module.exports = app;