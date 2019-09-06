const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const _ = require('underscore');

const conn = require('../config/db');
const DatosPersonales = require('../models/datosPersonalesModel.js');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/datosPersonales', (req, res) => {
    let data = new DatosPersonales(
        req.body.id_datos_personales,
        req.body.nombre,
        req.body.apellido,
        req.body.sexo,
        req.body.edad
    );
    conn.query('INSERT INTO datos_personales SET ?', data, (err, result) => {
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