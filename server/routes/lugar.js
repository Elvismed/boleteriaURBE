const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../config/db');
const _ = require('underscore');
const Lugar = require('../models/lugar.model');
const {postLugar} =require("../utils/SQL");
const multer = require('multer');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination:('server/public/uploads'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
})
 
app.use(multer({
    storage,
    dest:('server/public/uploads')
}).single('image'));


app.post('/lugar/image',(req,res)=>{
    console.log(req.file);
    res.json(req.body);
});


app.post('/lugar', (req, res) => {
    let data = new Lugar(
        req.body.idlugar,
        req.body.nombre,
        req.body.id_reserva
    );
    conn.query(postLugar, data, (err, result) => {
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