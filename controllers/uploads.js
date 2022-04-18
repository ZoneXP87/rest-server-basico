const { response } = require("express");
const { subirArchivo } = require("../helpers");

const { Usuario, Product } = require('../models');

const uploadFile = async(req, res = response) => {

    try {
        
        const nombre = await subirArchivo(req.files, ['txt', 'md']);
        res.json({ nombre });

    } catch (msg) {
        res.status(400).json({ msg });
    }
}

const updateImage = async(req, res = response) => {

    const {id, coleccion} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id)
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${id}`
                });
            }

            break;
        
        case 'products':
            modelo = await Product.findById(id)
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un producto con el id ${id}`
                });
            }
            break;
    
        default:
            return res.status(500).json({ msg: 'Se me olvido validar esto' });
    }
    
    const nombre = await subirArchivo(req.files, undefined, coleccion);
    modelo.img = nombre;

    await modelo.save();

    res.json(modelo);
}

module.exports = {
    uploadFile,
    updateImage,
}