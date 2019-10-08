'use strict';

module.exports = class Area {
    constructor(
        nombre,
        capacidad,
        fkzonas
    ) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.fkzonas = fkzonas;
    }
};