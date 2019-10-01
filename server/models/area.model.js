'use strict';

module.exports = class Area {
    constructor(
        id_area,
        nombre,
        capacidad,
        id_zonas
    ) {
        this.id_area = id_area;
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.id_zonas = id_zonas;
    }
};