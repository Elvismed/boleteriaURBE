'use strict';

module.exports = class Factura {
    constructor(
        numero_fact,
        fecha,
        hora,
        subtotal,
        total
    ) {
        this.numero_fact = numero_fact;
        this.fecha = fecha;
        this.hora = hora;
        this.subtotal = subtotal;
        this.total = total;
    }
}