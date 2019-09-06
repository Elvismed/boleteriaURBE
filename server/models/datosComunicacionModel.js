module.exports = class DatosComunicacion {
    constructor(
        id_datos_comuni,
        telefono,
        ciudad,
        municipio
    ) {
        this.id_datos_comuni = id_datos_comuni;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
};