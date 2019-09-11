
//USUARIO
const getUsuarios ='SELECT * FROM usuarios';
const getUsuarioById ='SELECT * FROM usuarios WHERE idusuarios=?';
const updateUsuarioById ='UPDATE usuarios SET ? where idusuarios = ?';
const postUsuario = 'INSERT INTO usuarios SET ?';
const deleteUsuario = 'DELETE FROM usuarios WHERE idusuarios = ?';

//RESERVA
const postReserva ='INSERT INTO reservas SET ?';

//AREA
const postArea = 'INSERT INTO areas SET ?';

//ESTADO
const postEstado='INSERT INTO estado SET ?';

//LUGAR
const postLugar='INSERT INTO lugar SET ?';

//ZONA
const zonaByIdUsuario='';
const postZona='INSERT INTO zonas SET ?';

//FACTURAS
const getFacturas = 'SELECT * FROM factura';
const postFactura = 'INSERT INTO factura SET ?';

//BUTACAS
const postButaca = 'INSERT INTO butaca SET ?'
//TICKET
const postTicket = 'INSERT INTO ticket SET ?'

module.exports = {
    getUsuarios,
    getUsuarioById,
    updateUsuarioById,
    postUsuario,
    deleteUsuario,
    zonaByIdUsuario,
    postZona,
    postLugar,
    postEstado,
    postArea,
    postReserva,
    getfacturas,
    postFactura,
    postButaca,
    postTicket
}