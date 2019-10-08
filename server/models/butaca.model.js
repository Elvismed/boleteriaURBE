'use strict';

module.exports = class Butaca {
    constructor(
        ubicacion,
        codigo_butaca,
        fkarea
    ) {
        this.ubicacion = ubicacion;
        this.codigo_butaca = codigo_butaca;
        this.fkarea = fkarea;
    }
};