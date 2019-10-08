'use strict';

const express = require("express");
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('underscore');
const logger = require('../utils/logger');
const queries = require('../utils/SQL');

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
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const body = req.body;
    conn.query(queries.postLogin, body.email, (err, result) => {
        if (err) {
            logger.info('Login failed')
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (result.length <= 0) {
            logger.info('Login failed E')
            return res.status(401).json({
                ok: false,
                message: 'Login failed (E)',
                err
            });
        }

        const user = result;

        if (!bcrypt.compareSync(body.pass, user[0].pass)) {
            logger.warn('error warn test')
            return res.status(401).json({
                ok: false,
                message: 'Login failed (P)',
                err
            });
        }

        let userRes = _.pick(
            user[0], [
                'idusuarios',
                'email',
                'rol',
                'nombre',
                'apellido',
                'identificacion',
                'sexo',
                'telefono',
                'edad',
                'municipio',
                'estado',
                'image'
            ]
        );

        console.log(userRes);

        let token = jwt.sign(
            userRes,
            process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRY }
        );

        res.json(token);
        logger.info(`Usuario Autentificado  ${ip.slice(7)}`)
    });
});

module.exports = app;