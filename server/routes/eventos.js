    'use strict';

const express = require("express");
const conn = require("../config/db");
const bodyParse = require("body-parser");
const Evento = require("../models/evento.model");
const queries = require('../utils/SQL');
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
app.get('/event/:id',[verifyToken,verifyAdmin],(req,res)=>{
    let idevento = req.params.id
    conn.query(queries.getEventoById2, idevento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json(result);
    });
})
app.get('/eventos/:id',[verifyToken], (req, res) => {
    let idevento = req.params.id
    conn.query(queries.getEventoByIdinner, idevento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json(result);
    });
});
app.get('/even/:id',[verifyToken,verifyAdmin], (req, res) => {
    let idevento = req.params.id
    let fkevento = req.params.id
    conn.query(queries.getEventoByIdinner, [idevento,fkevento],(err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json(result);
    });
});

app.post('/evento', [verifyToken, verifyAdmin], (req, res) => {
    
    let data = new Evento(
        req.body.nombreEvento,
        req.body.fecha,
        req.body.hora,
        req.body.tipo_evento,
        req.body.descripcion,
        req.body.fkusuario,
        req.body.fklugar,   
        req.body.activo 
    );
    console.log(data);
    conn.query('INSERT INTO evento SET ?', data, (err, result) => {
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
app.put("/eventos/:id", [verifyToken, verifyAdmin], (req, res) => {
    let idevento = req.params.id;
    let data = _.pick(req.body, ['nombreEvento', 'fecha', 'hora', 'descripcion','fklugar','tipo_evento']);
    conn.query(queries.updateEventoById,[data, idevento], (err, result) => {
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

app.delete('/eventos/:id', [verifyToken, verifyAdmin],(req, res) => {
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