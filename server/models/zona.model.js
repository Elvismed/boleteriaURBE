'use strict';

module.exports = class Zona {
    constructor(
        id_zona,
        nombre,
        precio,
        idlugar
    ) {
        this.id_zona = id_zona;
        this.nombre = nombre;
        this.precio = precio;
        this.idlugar = idlugar;
    }
};