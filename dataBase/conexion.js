var mysql = require("mysql");
var conexion = mysql.createConnection ({
    host:'0',
    user:'',
    password:'',
    database:'equipos'
});

conexion.connect(
    (err)=>{
        if(!err){
            console.log("Conexión Establecida");
        }else{
            console.log("Error de Conexión");
        }
    }
);

module.exports = conexion;
