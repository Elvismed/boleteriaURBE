module.exports = class User {
    constructor(
        idusuario,
        email,
        pass,
        rol,
        id_datos_comuni,
        id_datos_personales
    ) {
        this.idusuario = idusuario;
        this.email = email;
        this.pass = pass;
        this.rol = rol;
        this.id_datos_comuni = id_datos_comuni;
        this.id_datos_personales = id_datos_personales;
    }
};