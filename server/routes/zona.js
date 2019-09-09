const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const Zona = require('../models/zona.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/zona', (req, res) => {
    let data = new Zona(
        req.body.id_zona,
        req.body.nombre,
        req.body.precio,
        req.body.idlugar
    );
    conn.query('INSERT INTO zonas SET ?', data, (err, result) => {
        if(err) {
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