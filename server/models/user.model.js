module.exports = class User {
    constructor(
        idusuarios,
        email,
        pass,
        rol,
        nombre,
        apellido,
        ci,
        sexo,
        telefono,
        edad,
        ciudad,
        municipio,
        activo,
        image
    ) {
        this.idusuarios = Number(idusuarios);
        this.email=email;
        this.pass = pass;
        this.rol =Number(rol);
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.sexo = sexo;
        this.telefono = telefono;
        this.edad = Number(edad);
        this.ciudad = ciudad;
        this.municipio = municipio;
        this.activo = activo;
        this.image=image;
    }
};