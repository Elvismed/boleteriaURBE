'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Zona = require('../models/zona.model');
const queries = require('../utils/SQL');
const app = express();
const { verifyToken, verifyAdmin } = require('./../middlewares/auth');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/zona/user/:id',[verifyToken], (req, res) => {
    let idzona = req.params.id
    conn.query(queries.zonaByIdUsuario, idzona, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: " Usuario por zona encontrado"
        });
    });
});

app.get('/zonas', [verifyToken], (req, res) => {
    conn.query(queries.getzona, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: " Usuario por zona encontrado"
        });
    });
});
app.post('/zona', [verifyToken, verifyAdmin], (req, res) => {
    let data = new Zona(
        req.body.nombre,
        req.body.precio,
        req.body.fklugar,
        req.body.fkevento
    );
    conn.query(queries.postZona, data, (err, result) => {
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
app.delete('/zonaEL/:id',[verifyToken,verifyAdmin],(req,res)=>{
    let idzona = req.params.id
    conn.query(queries.deleteZona,idzona, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result: result,
            message: 'Zona eliminada'
        });
    
})
})
module.exports = app;