const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { nombre, apellido, edad } = req.query;

    res.json({
        msg: 'Get API - Controller',
        nombre,
        apellido,
        edad
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - Controller',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res) => {

    const { id } = req.params;
    res.json({
        msg: 'Put API - Controller',
        id
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete API - Controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}