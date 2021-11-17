const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(role = '') => {

    const existeRol = await Role.findOne({ role });
    if (!existeRol) {
        throw new Error(`El role ${ role } no está registrado en la BD`);
    }
}

const emailExiste = async(correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

const existeUsuarioPorID = async(id = '') => {

    // Verificar si el usuario existe
    const existeUsuario = await Usuario.findById(id);

    if (!existeUsuario) {
        throw new Error(`El ID: ${ id }, no está registrado`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorID
}