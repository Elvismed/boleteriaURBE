module.exports= class Evento{
    constructor(
    
        nombre,
        fecha,
        hora,
        descrip,
        tipos_evento_idtipos_eventos,
        usuarios_idusuarios,
        idlugar,
        imagen

    ){
        
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.descrip = descrip;

        this.tipos_evento_idtipos_eventos = tipos_evento_idtipos_eventos;
        this.usuarios_idusuarios = usuarios_idusuarios;
        this.idlugar = idlugar;
        this.imagen = imagen;
    }
}