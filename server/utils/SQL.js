'use strict';

const queries = {
    // Usuarios
    getUsuarios: 'SELECT * FROM usuarios WHERE activo=1',
    getUsuarioById: 'SELECT * FROM usuarios WHERE idusuarios= ?',
    updateUsuarioById: 'UPDATE usuarios SET ? WHERE idusuarios = ?',
    postUsuario: 'INSERT INTO usuarios SET ?',
    deleteUsuario: 'UPDATE usuarios SET activo=0 WHERE idusuarios= ?',

    // AREA
    postArea: 'INSERT INTO areas SET ?',

    // ESTADO
    getEstado: 'SELECT * FROM estado WHERE APROBADO= ? AND RECHAZADO = ? AND PENDIENTE = ?',
    postEstado: 'INSERT INTO estado SET ? WHERE id_estado= ?',


    // LUGAR
    getLugarById: 'SELECT * FROM lugar WHERE idLugar= ?',
    postLugar: 'INSERT INTO lugar SET ?',
    updateLugarById: 'UPDATE lugar SET ? WHERE idLugar = ?',
    deleteLugar: 'UPDATE lugar SET activo=0 WHERE idLugar= ?',

    // ZONA
    getzona: 'SELECT * FROM zonas',
    postZona: 'INSERT INTO zonas SET ?',
    zonaByIdUsuario: '',

    // FACTURAS
    getFacturas: 'SELECT * FROM factura',
    getFacturasByCod: 'SELECT * FROM factura WHERE numero_fact= ?',
    postFactura: 'INSERT INTO factura SET ?',

    // BUTACAS
    postButaca: 'INSERT INTO butaca SET ?',

    // TIKECTS
    postTicket: 'INSERT INTO ticket SET ?',

    //EVENTOS
    postEvento: 'INSERT INTO evento SET ?',
    getEvento: 'SELECT * FROM evento',
    getEventoById: 'SELECT * FROM evento WHERE ideventos = ?',
    updateEventoById: 'UPDATE evento SET ? WHERE ideventos = ?',
    deleteEvento: 'UPDATE evento SET activo=0 WHERE ideventos= ?',

    //TIPO EVENTOS
    postTipo: 'insert INTO tipos_evento SET ?'
};

module.exports = queries;