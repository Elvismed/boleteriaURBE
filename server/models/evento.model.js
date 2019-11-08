'use strict';

module.exports = class Evento {
    constructor(
        nombreEvento,
        fecha,
        hora,
        tipo_evento,
        descripcion,
        fkusuario,
        fklugar,
        activo
    ) {
        this.nombreEvento = nombreEvento;
        this.fecha = fecha;
        this.hora = hora;
        this.tipo_evento = tipo_evento;
        this.descripcion = descripcion;
        this.fkusuario = fkusuario;
        this.fklugar = fklugar;
        this.activo = activo;
    }
}