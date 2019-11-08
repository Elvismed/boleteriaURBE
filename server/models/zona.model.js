'use strict';

module.exports = class Zona {
    constructor(
        nombre,
        precio,
        fklugar,
        fkevento
    ) {
        this.nombre = nombre;
        this.precio = precio;
        this.fklugar = fklugar;
        this.fkevento= fkevento;
    }
};