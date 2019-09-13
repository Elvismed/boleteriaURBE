const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const User = require('../models/user.model');
const queries = require('../utils/SQL');

const { verifyToken, verifyAdmin } = require('./../middlewares/auth');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/user/test', verifyToken, (req, res) => {
    res.json(req.user);
});

app.get('/user', [verifyToken, verifyAdmin], (req, res) => {
    conn.query(queries.getUsuarios, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
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
app.post('/user', (req, res) => {
    let body = req.body;

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
    );
    conn.query(queries.postUsuario, data, (err, result) => {
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


app.get('/user/:id', (req, res) => {
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
            message: `el usuario `
        })

    });
});

app.put('/user/:id', (req, res) => {
    let idusuarios = req.params.id
    let data = _.pick(req.body, ['email', 'nombre', 'apellido', 'ci', 'telefono', 'ciudad', 'municipio', 'pass']);

    data.pass = bcrypt.hashSync(data.pass, 10);

    conn.query(queries.updateUsuarioById, [data, idusuarios], (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: `Usuario  fue cambiado`
        })
    })
})

app.delete('/user/:id', (req, res) => {
    let idusuarios = req.params.id
    conn.query(queries.deleteUsuario, idusuarios, (err, result) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result,
            message: `El usuario fue eliminado`
        });
    });
});
module.exports = app;