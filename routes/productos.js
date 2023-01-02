var express = require('express');
var router = express.Router();
const productosControllers = require("../controllers/productosControllers")

var multer = require('multer');
var fecha = Date.now();
/* GET home page. */
router.get('/', productosControllers.productos);

router.post('/eliminar/:id', productosControllers.eliminar);
router.get('/editar/:id', productosControllers.editar);


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

router.post('/actualizar', cargar.single("archivo"), productosControllers.actualizar);

module.exports = router;