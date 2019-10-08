'use strict';

const queries = {
    //lOGIN
    postLogin: 'SELECT * FROM usuario WHERE email=?',

    //USUARIO
    getUsuarios: 'SELECT * FROM usuario WHERE activo=1',
    getUsuarioById: 'SELECT * FROM usuario WHERE iduser ?',
    updateUsuarioById: 'UPDATE usuarios SET ? WHERE iduser = ?',
    postUsuario: 'INSERT INTO usuario SET ?',
    deleteUsuario: 'UPDATE usuario SET activo=0 WHERE iduser= ?',

    // AREA
    postArea: 'INSERT INTO area SET ?',

    // ESTADO
    //getEstado: 'SELECT * FROM estado WHERE APROBADO= ? AND RECHAZADO = ? AND PENDIENTE = ?',
    //modificar xd
    postEstado: 'INSERT INTO estado SET ? WHERE idestado= ?',


    // LUGAR
    getLugarById: 'SELECT * FROM lugar WHERE idlugar= ?',
    postLugar: 'INSERT INTO lugar SET ?',
    updateLugarById: 'UPDATE lugar SET ? WHERE idñugar = ?',
    deleteLugar: 'UPDATE lugar SET activo=0 WHERE idlugar= ?',

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