'use strict';

module.exports = class Area {
    constructor(
        nombre,
        capacidad,
        fkzona,
        fkevento
    ) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.fkzona = fkzona;
        this.fkevento = fkevento;
    }
};