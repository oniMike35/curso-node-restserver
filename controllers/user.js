const {response,request} = require('express');

const userGet = (req = request,res = response) => {
    //const query = req.query;
    const  {nombre,q,apikey} = req.query;

    res.json({
        ok:true,
        msg:'get APi - from controller',
        nombre,q,apikey
    })
}

const userPost = (req,res = response) => {

    const {nombre,edad} = req.body;

    res.json({
        ok:true,
        msg:'post APi - from controller',
        nombre,edad
    })
}

const userPut = (req,res = response) => {

    const id = req.params.id;
    res.json({
        ok:true,
        msg:'get APi - from controller',
        id
    })
}

const userDelete = (req,res = response) => {
    res.json({
        ok:true,
        msg:'get APi - from controller'
    })
}

module.exports = {
    userGet,userPost,userPut,userDelete
}
