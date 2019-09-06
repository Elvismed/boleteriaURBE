const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const _ = require('underscore');

const conn = require('../config/db');
const User = require('../models/user.model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/user', (req, res) => {
    let data = new User(
        req.body.id_usuario,
        req.body.nombre,
        req.body.email,
        bcrypt.hashSync(req.body.pass, 10)
    );
    conn.query('INSERT INTO usuarios SET ?', data, (err, result) => {
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

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let data = _.pick(req.body, ['nombre', 'email']);

    conn.query("UPDATE usuarios SET ? where id_usuario = ?", [data, id],(err, result) =>{
        if(err) {
            res.status(400).json({
                err
            });
        }

        res.json({
            result,
            message: 'Se ha modificado exitosamente'
        });
    });
});

app.get('/user', (req, res) => {

    conn.query("SELECT * FROM usuarios",(err, result) =>{
        if(err) {
            res.status(400).json({
                err
            });
        }

        res.json({
            result
        });
    });
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    conn.query("DELETE FROM usuarios where id_usuario = ?", id,(err, result) =>{
        if(err) {
            res.status(400).json({
                err
            });
        }

        res.json({
            result,
            message: 'Se ha eliminado exitosamente'
        });
    });
});

module.exports = app;