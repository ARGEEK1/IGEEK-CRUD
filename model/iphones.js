module.exports = {
    obtener:function (conexion,funcion) {
        conexion.query ("SELECT * FROM iphones", funcion);
    },
    
    guardar:function (conexion,datos,archivos,funcion) {
        conexion.query ("INSERT INTO iphones (id, nombre, precio, color, chip, ram, imagen) VALUES (?,?,?,?,?,?,?)",[datos.id, datos.nombre, datos.precio, datos.color, datos.chip, datos.ram, archivos.filename], funcion);
    },

    datosID:(conexion,id,funcion)=>{
        conexion.query ("SELECT * FROM iphones WHERE id=?",[id],funcion);
    },

    borrarDB:(conexion,id,funcion)=>{ 
        conexion.query ("DELETE FROM iphones WHERE id=?",[id],funcion);
    }, 

    actualizar:(conexion,datos,funcion)=>{
        conexion.query ("UPDATE iphones SET nombre=?, precio=?, color=?, chip=?,ram=? WHERE id=?",[datos.nombre, datos.precio, datos.color, datos.chip, datos.ram, datos.id], funcion);
    },

    actualizarArchivo:(conexion,datos,archivos,funcion)=>{
        conexion.query ("UPDATE iphones SET imagen=? WHERE id=?",[archivos.filename, datos.id], funcion);
    }
 };
