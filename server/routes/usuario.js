'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const User = require('../models/user.model');
const queries = require('../utils/SQL');
const upload = require('../middlewares/upload-images');

const { verifyToken, verifyAdmin } = require('./../middlewares/auth');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/user-data', verifyToken, (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        return res.status(401).json({
            ok: false,
            message: 'ya valiste verga'
        });
    }
});

app.get('/user', [verifyToken, verifyAdmin], (req, res) => {
    conn.query(queries.getUsuarios, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json(result);
    });
})

/*
{
	"idusuarios": null,
	"email": "luigidicarlo888@gmail.com",
	"pass": "25189975",
	"rol": 1,
	"nombre": "Luis",
	"apellido": "Huerta",
	"ci": "25189975",
	"sexo": "M",
	"telefono": "04124722052",
	"edad": 24,
	"ciudad": "Maracaibo",
	"municipio": "Maracaibo"
}
*/
// POST to add a new user to the database
app.post('/registro', [upload], async(req, res) => {
    let data = new User(
        req.body.idusuarios = null,
        req.body.email,
        bcrypt.hashSync(req.body.pass, 10),
        req.body.rol,
        req.body.nombre,
        req.body.apellido,
        req.body.ci,
        req.body.sexo,
        req.body.telefono,
        req.body.edad,
        req.body.ciudad,
        req.body.municipio,
        req.body.activo,
        req.file.path
    );
    conn.query(queries.postUsuario, await data, (err, result) => {
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
    });
});


app.get('/user/:id', verifyToken, (req, res) => {
    let idusuarios = req.params.id
    conn.query(queries.getUsuarioById, idusuarios, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: 'Aqui perro'
        })

    });
});

app.put('/user/:id', [verifyToken, upload], (req, res) => {
    let idusuarios = req.params.id
    let data = _.pick(req.body, ['email', 'pass', 'nombre', 'apellido', 'ci', 'telefono', 'ciudad', 'municipio', 'image']);
    let image = req.file.path
    data.pass = bcrypt.hashSync(data.pass, 10);
    data.image = image
    conn.query(queries.updateUsuarioById, [data, idusuarios], (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result,
            message: 'Toma Perra'
        });
    });
});

app.delete('/user/:id', [verifyToken, verifyAdmin], (req, res) => {
    let idusuarios = req.params.id
    conn.query(queries.deleteUsuario, idusuarios, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            result: result,
            message: 'Mataste a Telmo'
        });
    });
});

module.exports = app;