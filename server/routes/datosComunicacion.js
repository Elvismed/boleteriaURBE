const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const _ = require('underscore');

const conn = require('../config/db');
const DatosComunicacion = require('../models/datosComunicacionModel.js');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/datosComunicacion', (req, res) => {
    let data = new DatosComunicacion (
        req.body.id_datos_comuni,
        req.body.telefono,
        req.body.ciudad,
        req.body.municipio
    );
    conn.query('INSERT INTO datos_comunicacion SET ?', data, (err, result) => {
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