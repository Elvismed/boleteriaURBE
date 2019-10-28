'use strict';

const queries = {
    //lOGIN
    postLogin: 'SELECT * FROM usuario WHERE email=?',

    //USUARIO
    getUsuarios: 'SELECT * FROM usuario WHERE activo=1',
    getUsuarioById: 'SELECT * FROM usuario WHERE iduser = ?',
    updateUsuarioById: 'UPDATE usuarios SET ? WHERE iduser = ?',
    postUsuario: 'INSERT INTO usuario SET ?',
    deleteUsuario: 'UPDATE usuario SET activo=0 WHERE iduser= ?',

    // AREA
    postArea: 'INSERT INTO area SET ?',

    // ESTADO
    //getEstado: 'SELECT * FROM estado WHERE APROBADO= ? AND RECHAZADO = ? AND PENDIENTE = ?',
    //
    postEstado: 'INSERT INTO estado SET ? WHERE idestado= ?',


    // LUGAR
    getLugarById: 'SELECT * FROM lugar WHERE idlugar= ?',
    postLugar: 'INSERT INTO lugar SET ?',
    updateLugarById: 'UPDATE lugar SET ? WHERE idñugar = ?',
    deleteLugar: 'UPDATE lugar SET activo=0 WHERE idlugar= ?',

    // ZONA
    getzona: 'SELECT * FROM zona',
    postZona: 'INSERT INTO zona SET ?',
    zonaByIdUsuario: '',

    // FACTURAS
    getFacturas: 'SELECT * FROM factura GROUP BY numero_factura',
    getFacturasByCod: 'SELECT * FROM factura WHERE numero_factura= ?',
    postFactura: 'INSERT INTO factura SET ?',
    getFacturaConfirmacion: 'SELECT * FROM factura INNER JOIN butaca ON factura.fkbutaca = butaca.idbutaca WHERE numero_factura= ?',

    // BUTACAS
    postButaca: 'INSERT INTO butaca SET ?',

    // TIKECTS
    postTicket: 'INSERT INTO ticket SET ?',

    //EVENTOS
    postEvento: 'INSERT INTO evento SET ?',
    getEvento: 'SELECT * FROM evento',
    getEventoById: 'SELECT * FROM evento WHERE idevento = ?',
    updateEventoById: 'UPDATE evento SET ? WHERE idevento = ?',
    deleteEvento: 'UPDATE evento SET activo=0 WHERE idevento= ?', //agregar activo en tabla

    //TIPO EVENTOS
    postTipo: 'insert INTO tipos_evento SET ?'
};

module.exports = queries;