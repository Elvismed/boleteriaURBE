module.exports= class Evento{
    constructor(
        ideventos,
        nombre,
        fecha,
        hora,
        descrip,
        imagen
    ){
        this.ideventos =ideventos;
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.descrip = descrip;
        this.imagen = imagen;
    }
}