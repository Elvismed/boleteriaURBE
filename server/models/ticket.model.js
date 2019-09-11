module.exports = class Ticket {
    constructor(
        idticket,
        codigo,
        estado_idestado,
        factura_idfactura
    ) {
        this.idticket = idticket;
        this.codigo= codigo; 
        this.estado_idestado = estado_idestado;
        this.factura_idfactura = factura_idfactura;
    }
};