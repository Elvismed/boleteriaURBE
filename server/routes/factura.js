'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const conn = require("../config/db");
const Factura = require("../models/factura.model");
const queries = require('../utils/SQL');
const _ = require("underscore");
const { verifyToken, verifyAdmin } = require('./../middlewares/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/facturas', [verifyToken, verifyAdmin], (req, res) => {
    conn.query(queries.getFacturas, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result
        })
    });
});

app.get('/factura/:numero_factura',verifyToken, (req, res) => {
   let data = req.params.numero_factura
    conn.query(queries.getFacturaConfirmacion,data,(err, result)=>{
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result
        })
    })
});


app.post('/factura', verifyToken, (req, res) => {
    let datos = req.body;
    console.log(datos)
    let dato = datos[0].numero_factura

    datos.forEach(element => {
        let data = _.pick(element, ['numero_factura', 'fecha', 'hora', 'subtotal', 'total', 'fkusuario', 'fkbutaca', 'fkevento'])
        conn.query(queries.postFactura, data, (err, result) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    err
                });
            }
        });
    });
    console.log(dato)
    res.json({
        ok: true
    })
    

});


module.exports = app;