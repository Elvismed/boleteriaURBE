const express = require("express");
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('underscore');

const { allowCors } = require('../middlewares/web-security');

// MySQL connection
const conn = require('../config/db');

// Express init
const app = express();

// Body parser
app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

// Allow CORS
app.use(allowCors);

// POST to login
app.post('/login', (req, res) => {
    const body = req.body;

    conn.query('SELECT * FROM usuarios WHERE email=?', body.email, (err, result) => {
        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (result.length <= 0) {
            return res.status(401).json({
                ok: false,
                message: 'Login failed (E)',
                err
            });
        }

        const user = result;

        if(!bcrypt.compareSync(body.pass, user[0].pass)) {
            return res.status(401).json({
                ok: false,
                message: 'Login failed (P)',
                err
            });
        }

        let userRes = _.pick(
            user[0], 
            [
                'idusuarios', 
                'email', 
                'rol', 
                'nombre', 
                'apellido',
                'ci',
                'sexo',
                'telefono',
                'edad',
                'ciudad',
                'municipio'
            ]
        );

        console.log(userRes);

        let token = jwt.sign(
            userRes,
            process.env.SECRET_KEY,
            { expiresIn: process.env.TOKEN_EXPIRY }
        );

        res.json(token);
    });
});

module.exports = app;