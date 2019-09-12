const express = require('express');
const constants = require('./../utils/constants');

const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.user = decoded;

        next();
    });
};

let verifyAdmin = (req, res, next) => {
    let user = req.user;

    // DEBUG
    console.log(user);
    console.log(constants.ADMIN_ROLE);
    console.log('Logged in user role: ' + user.rol);

    if(user.rol === constants.CLIENT_ROLE) {
        return res.status(401).json({
            ok: false,
            message: 'Access is denied'
        });
    } else if(user.rol === constants.ADMIN_ROLE) {
        next();
    }
};

module.exports = { verifyToken, verifyAdmin };