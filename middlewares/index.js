const validarCampos = require('../middlewares/validar-campos');
const validateCategory = require('../middlewares/validate-category');
const validarJWT = require('../middlewares/validar-jwt');
const validarRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validarCampos,
    ...validateCategory,
    ...validarJWT,
    ...validarRoles    
}