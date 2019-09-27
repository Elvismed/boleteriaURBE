const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Lugar = require('../models/lugar.model');
const { postLugar } = require("../utils/SQL");
const upload = require('../middlewares/upload-images');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/lugar/image', [upload], (req, res) => {
    console.log(req.file);
    console.log(req.file.path)
    res.json(req.file);
});

app.get('/lugar/:id', (req, res) => {
    let idlugar = req.params.id
    conn.query('SELECT * FROM lugar WHERE idLugar=?', idlugar, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: `telmo `
        })

    });
});
app.post('/lugar', [upload], async(req, res) => {
    let data = new Lugar(
        req.body.idLugar,
        req.body.nombre,
        req.file.path
    );
    conn.query('INSERT INTO lugar SET ?', await data, (err, result) => {
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