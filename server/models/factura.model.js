'use strict';

module.exports = class Factura {
    constructor(
        numero_factura,
        fecha,
        hora,
        subtotal,
        total,
        fkusuario,
        fkbutaca,
        fkevento
    ) {
        this.numero_factura = numero_factura;
        this.fecha = fecha;
        this.hora = hora;
        this.subtotal = subtotal;
        this.total = total;
        this.fkusuario = fkusuario;
        this.fkbutaca = fkbutaca;
        this.fkevento = fkevento;
    }
}