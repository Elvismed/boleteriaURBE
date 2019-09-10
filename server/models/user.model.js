module.exports = class User {
    constructor(
        idusuarios,
        email,
        pass,
        rol,
        nombre,
        apellido,
        sexo,
        edad,
        telefono,
        ciudad,
        municipio,
    ) {
        this.idusuarios = idusuarios;
        this.email = email;
        this.pass = pass;
        this,rol = rol;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = edad;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
};