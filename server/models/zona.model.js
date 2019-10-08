'use strict';

module.exports = class Zona {
    constructor(
        nombre,
        precio,
        fklugar
    ) {
        this.nombre = nombre;
        this.precio = precio;
        this.fklugar = fklugar;
    }
};