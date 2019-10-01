'use strict';

module.exports = class Butaca {
    constructor(
        idbutacas,
        ubicacion,
        cod_butaca,
        area_idarea,
        ticket_idticket
    ) {
        this.idbutacas = idbutacas;
        this.ubicacion = ubicacion;
        this.cod_butaca = cod_butaca;
        this.area_idarea = area_idarea;
        this.ticket_idticket = ticket_idticket;
    }
};