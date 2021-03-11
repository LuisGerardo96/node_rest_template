const { response, request } = require('express');

const userGet = (req, resp) => {
    const query = req.query;
    resp.json({
        msg: 'GET',
        query
    })
};

const userPost = (req = request, resp) => {
    const { nombre, edad } = req.body;
    resp.json({
        msg: 'POST',
        nombre,
        edad
    })
};

const userPut = (req, resp) => {
    const { param } = req.params;
    resp.json({
        msg: 'PUT',
        param,
    })
};
const userPatch = (req, resp) => {
    resp.send('Patch-users');
};
const userDelete = (req, resp) => {
    resp.send('Delete-users');
};




module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}