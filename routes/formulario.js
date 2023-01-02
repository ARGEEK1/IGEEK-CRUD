var express = require('express');
var router = express.Router();
const formularioControllers = require("../controllers/formularioControllers")

var multer = require('multer');
var fecha = Date.now();

var rutaAlmacenImg = multer.diskStorage({
    destination:(request, file, callback)=>{
        callback(null,"./public/images/productos/");
    },
    filename:(request, file, callback)=>{
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});
var cargar = multer({ storage:rutaAlmacenImg });

/* GET home page. */
router.get('/', formularioControllers.formulario);
router.post('/', cargar.single("archivo"), formularioControllers.agregar);


module.exports = router;