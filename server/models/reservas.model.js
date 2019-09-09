module.exports = class Reserva {
    constructor(
        id_reserva,
        fecha_reserva,
        fecha_limite,
        id_usuario,
        id_estado
        
    ) {
        this.id_reserva = id_reserva;
        this.fecha_reserva = fecha_reserva;
        this.fecha_limite = fecha_limite;
        this.id_usuario = id_usuario;
        this.id_estado = id_estado;
    }
};