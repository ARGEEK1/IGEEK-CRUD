var conexion = require('../dataBase/conexion');
var iphones = require("../model/iphones");


const formularioControllers = {

    formulario:(req,res)=>{ 

        res.render('formulario', { title: 'iGeek'});
    },
    
    agregar:(req,res)=>{
        console.log(req.body);
        console.log(req.file.filename);
        iphones.guardar(conexion,req.body,req.file,function (err) {
         res.redirect('/productos');
        }); 
    }      
};

module.exports = formularioControllers;