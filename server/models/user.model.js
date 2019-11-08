'use strict';

module.exports = class User {
    constructor(
        email,
        pass,
        rol,
        nombre,
        apellido,
        identificacion,
        sexo,
        telefono,
        edad,
        municipio,
        activo
    ) {
        this.email = email;
        this.pass = pass;
        this.rol = Number(rol);
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.sexo = sexo;
        this.telefono = telefono;
        this.edad = Number(edad);
        this.municipio = municipio;
        this.activo = activo;
    }
};