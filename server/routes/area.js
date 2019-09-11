const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Area = require('../models/area.model');
const {postArea}= require("../utils/SQL");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/area', (req, res) => {
    let data = new Area(
        req.body.id_area,
        req.body.nombre,
        req.body.capacidad,
        req.body.id_zonas
    );
    conn.query(postArea, data, (err, result) => {
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