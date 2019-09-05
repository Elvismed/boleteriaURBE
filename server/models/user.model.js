module.exports = class User {
    constructor(
        id_usuario,
        nombre,
        email,
        pass
    ) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.email = email;
        this.pass = pass;
    }
};