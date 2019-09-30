const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const Tipoevento = require('../models/tipoevento.model');
const queries = require('../utils/SQL');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/creartipo', (req,res)=>{
    const body = req.body;
    let data = new Tipoevento(
        body.idtipos_eventos = null,
        body.nombre
    )
  conn.query(queries.postTipo,data,(err, result)=>{
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
  })  
})

module.exports = app;