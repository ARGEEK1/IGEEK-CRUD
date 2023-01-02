var conexion = require('../dataBase/conexion');
var iphones = require("../model/iphones");


const homeControllers = {

    home:(req,res)=>{ 

        iphones.obtener(conexion,function (err,datos){

            console.log(datos)

            res.render('home', { title: 'iGeek',iphones:datos});

        }); 
    } 
}  

module.exports = homeControllers;