const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const {postButaca} = require("../utils/SQL");
const Butaca = require('../models/butaca.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/butaca', (req, res) => {
    let data = new  Butaca(
        req.body.idbutacas,
        req.body.ubicacion,
        req.body.cod_butaca,
        req.body.area_idarea,
        req.body.ticket_idticket
    );
    conn.query(postButaca, data, (err, result) => {
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