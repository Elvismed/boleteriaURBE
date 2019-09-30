const queries = {
    // Usuarios
    getUsuarios: 'SELECT * FROM usuarios WHERE activo=1',
    getUsuarioById: 'SELECT * FROM usuarios WHERE idusuarios=?',
    updateUsuarioById: 'UPDATE usuarios SET ? WHERE idusuarios = ?',
    postUsuario: 'INSERT INTO usuarios SET ?',
    deleteUsuario: 'UPDATE usuarios SET activo=0 WHERE idusuarios=?',

    // AREA
    postArea: 'INSERT INTO areas SET ?',

    // ESTADO
    postEstado: 'INSERT INTO estado SET ?',

    // LUGAR
    postLugar: 'INSERT INTO lugar SET ?',
    updateEventoById: 'UPDATE lugar SET ? WHERE idLugar = ?',
    deleteLugar: 'UPDATE lugar SET activo=0 WHERE idLugar=?',

    // ZONA
    postZona: 'INSERT INTO zonas SET ?',
    zonaByIdUsuario: '',

    // FACTURAS
    getFacturas: 'SELECT * FROM factura',
    postFactura: 'INSERT INTO factura SET ?',

    // BUTACAS
    postButaca: 'INSERT INTO butaca SET ?',
    postTicket: 'INSERT INTO ticket SET ?',

    //EVENTOS
    postEvento: 'INSERT INTO evento SET ?',
    getEvento: 'SELECT * FROM evento',
    updateEventoById: 'UPDATE evento SET ? WHERE ideventos = ?',
    deleteEvento: 'UPDATE evento SET activo=0 WHERE ideventos=?',
    //TIPO EVENTOS
    postTipo: 'insert INTO tipos_evento SET ?'
};

module.exports = queries;