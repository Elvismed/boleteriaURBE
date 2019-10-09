'use strict';

module.exports = class Area {
    constructor(
        nombre,
        capacidad,
        fkzona
    ) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.fkzona = fkzona;
    }
};