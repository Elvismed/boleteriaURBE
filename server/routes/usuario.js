const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const User = require('../models/user.model');
const {agregarUsuario} =require('../utils/SQL');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/',(req , res)=>{
    conn.query('SELECT * FROM usuarios ',(err, result)=>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok:true,
            result,
         
        })
    });
})

app.post('/user', (req, res) => {
    let data = new User(
        req.body.id_usuario=null,
        req.body.email,
        bcrypt.hashSync(req.body.pass, 10),
        req.body.rol,
        req.body.nombre,
        req.body.apellido,
        req.body.sexo,
        req.body.telefono,
        req.body.edad,
        req.body.ciudad,
        req.body.municipio,
    );
    conn.query(agregarUsuario, data, (err, result) => {
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


app.get('/user/:id',(req, res) =>{
        let id_usuario = req.params.id
    conn.query('SELECT * FROM usuarios WHERE ?',id_usuario,(err, result)=>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok:true,
            result,
            message: `el usuario `
        })
    });
});

app.put('/user/:id',(req, res) =>{
    let idusuario = req.params.id
    let data = _.pick(req.body,['email','nombre','apellido','telefono']);
 
conn.query('UPDATE usuarios SET ? where idusuario = ?', [data ,idusuario],(err, result)=>{
    if(err){
        res.status(400).json({
            ok: false,
            err
        });
    }
    res.json({
        ok:true,
        result,
        message: `Usuario  fue cambiado`
    })
})
})

app.delete('/user/:id',(req, res)=>{
    let idusuario = req.params.id
conn.query('DELETE FROM usuarios WHERE idusuario = ?',idusuario,(err, result)=>{
    if(err){
        res.status(400).json({
            ok: false,
            err
        });
    }
    res.json({
        ok:true,
        result,
        message: `El usuario fue eliminado`
    })
})
    
})
module.exports = app;