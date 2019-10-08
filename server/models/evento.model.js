'use strict';

module.exports = class Evento {
    constructor(
        nombre,
        fecha,
        hora,
        tipo_evento,
        descripcion,
        image,
        fkusuario,
        fklugar
    ) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.tipo_evento = tipo_evento;
        this.descripcion = descripcion;
        this.image = image;
        this.fkusuario = fkusuario;
        this.fklugar = fklugar;
    }
}