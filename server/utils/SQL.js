
//USUARIO
const getUsuarios ='SELECT * FROM usuarios';
const getUsuarioById ='SELECT * FROM usuarios WHERE ?';
const updateUsuarioById ='UPDATE usuarios SET ? where idusuario = ?';
const postUsuario = 'INSERT INTO usuarios SET ?';
const deleteUsuario = 'DELETE FROM usuarios WHERE idusuario = ?';
//ZONA
const zonaByIdUsuario='';
const postZona='INSERT INTO zonas SET ?';


module.exports = {
    getUsuarios,
    getUsuarioById,
    updateUsuarioById,
    postUsuario,
    deleteUsuario,
    zonaByIdUsuario,
    postZona
}