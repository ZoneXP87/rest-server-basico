const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos, validarArchivoSubir } = require('../middlewares');

const { uploadFile, updateImage, updateImageCloudinary, mostrarImagen } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');

const router = Router();

router.post('/', validarArchivoSubir, uploadFile);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id', 'El id debe ser de mongo').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios', 'products'])),
    validarCampos
], updateImageCloudinary);
//], updateImage);

router.get('/:coleccion/:id',[
    check('id', 'El id debe ser de mongo').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios', 'products'])),
    validarCampos
], mostrarImagen);

module.exports = router;