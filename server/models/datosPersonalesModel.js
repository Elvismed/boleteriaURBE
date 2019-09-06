module.exports = class DatosPeronales {
    constructor(
        id_datos_personales,
        nombre,
        apellido,
        sexo,
        edad
    ) {
        this.id_datos_personales = id_datos_personales;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo ;
        this.edad = edad;
    }
};