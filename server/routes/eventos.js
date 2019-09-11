const express = require("express");
const conn = require("../config/db");
const bodyParse= require("body-parser");
const Evento = require("../models/evento.model");
const {

        } = require("../utils/SQL");

const app = express();
app.use(bodyParse.json());

app.use(bodyParse.json());


app.get("/eventos",(req,res)=>{

});
app.get("/eventos/:id",(req,res)=>{

});
app.post("/eventos",(req,res)=>{

});
app.put("/eventos/:id",(req,res)=>{

});
app.delete("/eventos",(req,res)=>{

});