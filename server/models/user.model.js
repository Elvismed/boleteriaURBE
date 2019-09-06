module.exports = class User {
    constructor(
        id_usuario,
        email,
        pass,
        rol,
        id_datos_comuni,
        id_datos_personales
    ) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.email = email;
        this.pass = pass;
        this.rol = rol;
        this.id_datos_comuni = id_datos_comuni;
        this.id_datos_personales = id_datos_personales;
    }
};