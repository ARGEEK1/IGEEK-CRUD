var conexion = require('../dataBase/conexion');
var iphones = require("../model/iphones");
var fs = require("fs");

const productosControllers = {

    productos:(req,res)=>{ 

        iphones.obtener(conexion,function (err,datos){

            console.log(datos);

            res.render('productos', { title: 'iGeek',iphones:datos});

        }); 
    },

    eliminar:(req,res)=>{
        console.log("Recepción de datos");
        console.log(req.params.id);

        iphones.datosID(conexion,req.params.id,function (err,registros){
            var nombreImagen="public/images/productos/"+(registros[0].imagen);

            if(fs.existsSync(nombreImagen)){
                fs.unlinkSync(nombreImagen);
            };

            iphones.borrarDB(conexion,req.params.id,function (err){

                res.redirect('/productos');

            });
        });
    },

    editar:(req,res)=>{

        iphones.datosID(conexion,req.params.id,function (err,registros){

            console.log(registros[0]);

            res.render("editar", { title:'iGeek', datos:registros[0]});
    
         });
    },

    actualizar:(req,res)=>{

        console.log(req.body.id);

        if (req.file){

            if (req.file.filename){
                
                iphones.datosID(conexion,req.body.id,function (err,registros){

                    var nombreImagen="public/images/productos/"+(registros[0].imagen);
        
                    if(fs.existsSync(nombreImagen)){
                        fs.unlinkSync(nombreImagen);
                    };
        
                   iphones.actualizarArchivo(conexion,req.body,req.file,function(err){});

                });
            }
            
        };
        
        if (req.body) {

            iphones.actualizar(conexion,req.body,function (err){});
  
        };

        res.redirect("/productos");
       
        
    }

}; 

module.exports = productosControllers;