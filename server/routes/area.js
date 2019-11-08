'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Area = require('../models/area.model');
const queries = require('../utils/SQL');
const { verifyToken, verifyAdmin } = require('./../middlewares/auth');
const app = express();

const { allowCors } = require('../middlewares/web-security');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Allow CORS
app.use(allowCors);

app.get('/area/:id',[verifyToken,verifyAdmin], (req, res) => {
    let idzona = req.params.id
    conn.query(queries.getArea, idzona, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json(result);
    });
});

app.post('/area',[verifyToken, verifyAdmin], (req, res) => {
    let data = new Area(
        req.body.nombre,
        req.body.capacidad,
        req.body.fkzona,
        req.body.fkevento
    );
    conn.query(queries.postArea, data, (err, result) => {
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

app.delete('/areaEL/:id',[verifyToken,verifyAdmin],(req,res)=>{
    let idzona = req.params.id
    conn.query(queries.deleteArea,idzona, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result: result,
            message: 'Area eliminada'
        });
})
})

module.exports = app;