const express = require("express");
const bodyParser = require("body-parser");
const conn = require("../config/db");
const Factura = require("../models/factura.model");
const queries = require('../utils/SQL');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/factura", (req, res) => {
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

app.post("/factura", (req, res) => {
    let data = new Factura(
        req.body.id = null,
        req.body.numero_fact,
        req.body.fecha,
        req.body.hora,
        req.body.subtotal,
        req.body.total
    );
    conn.query(queries.postFactura, data, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: "Factura Creada"
        });
    });
});

module.exports = app;