const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const conn = require('../config/db');
const _ = require('underscore');
const User = require('../models/user.model');
const {getUsuarios,
        getUsuarioById,
        postUsuario,
        updateUsuarioById,
        deleteUsuario   
                        } =require('../utils/SQL');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/user',(req , res)=>{
    conn.query(getUsuarios,(err, result)=>{
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
        req.body.idusuarios=null,
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
    conn.query(postUsuario, data, (err, result) => {
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
        let idusuarios = req.params.id
    conn.query(getUsuarioById,idusuarios,(err, result)=>{
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
    let idusuarios = req.params.id
    let data = _.pick(req.body,['email','nombre','apellido','ci','telefono','ciudad','municipio']);
 
conn.query(updateUsuarioById, [data ,idusuarios],(err, result)=>{
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
    let idusuarios = req.params.id
conn.query(deleteUsuario,idusuarios,(err, result)=>{
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