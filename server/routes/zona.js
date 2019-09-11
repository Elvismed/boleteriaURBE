const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Zona = require('../models/zona.model');
const {zonaByIdUsuario,
        postZona} =require("../utils/SQL");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/zona/user/:id',(req,res) =>{
    let id_zona= req.params.id
    conn.query(zonaByIdUsuario,id_zona,(err,result)=>{
        if(err){
            res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            result,
            message:" Usuario por zona encontrado"
        });
    });
});

app.post('/zona', (req, res) => {
    let data = new Zona(
        req.body.id_zona,
        req.body.nombre,
        req.body.precio,
        req.body.idlugar
    );
    conn.query(postZona, data, (err, result) => {
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