var mysql = require("mysql");
require('dotenv').config();

const { DB_HOST, DB_USER, DB_NAME } = process.env;

var conexion = mysql.createConnection ({
    host: DB_HOST,
    user: DB_USER,
    password:'',
    database: DB_NAME
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
