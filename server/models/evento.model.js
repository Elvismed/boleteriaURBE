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
<<<<<<< HEAD
        this.tipo_evento = tipo_evento;
        this.descripcion = descripcion;
=======
        this.descrip = descrip;
        this.tipos_evento_idtipos_eventos = tipos_evento_idtipos_eventos;
        this.usuarios_idusuarios = usuarios_idusuarios;
        this.idlugar = idlugar;
>>>>>>> 96c13f718027a1441286905b982db62fbe6e2825
        this.image = image;
        this.fkusuario = fkusuario;
        this.fklugar = fklugar;
    }
}