'use strict';

module.exports = class Zona {
    constructor(
        nombre,
        precio,
        Lugar_idLugar
    ) {
        this.nombre = nombre;
        this.precio = precio;
        this.Lugar_idLugar = Lugar_idLugar;
    }
};