const express = require("express");
const conn = require("../config/db");
const bodyParse = require("body-parser");
const Evento = require("../models/evento.model");
const queries = require('../utils/SQL');

const app = express();

app.use(bodyParse.json());


app.get("/eventos", (req, res) => {
    conn.query(queries.getEvento, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }

        res.json(result);
    });

});
app.get("/eventos/:id", (req, res) => {

});
app.post("/evento", (req, res) => {
  const body =  req.body;
    let data = new Evento(
    body.nombre,
    body.fecha,
    body.hora,
    body.descrip,
    body.tipos_evento_idtipos_eventos,
    body.usuarios_idusuarios,
    body.idlugar
    );
conn.query(queries.postEvento,data,(err, result)=>{
    if(err){
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
app.put("/eventos/:id", (req, res) => {

});
app.delete("/eventos", (req, res) => {

});
module.exports = app;