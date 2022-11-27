const conexion = require("../config/conexion");

usuariosControlador={};

usuariosControlador.altaUsuario=async(req,res)=>{
    let sql ='insert into usuarios (ID,Nombre,Contrasena,Tipo) values ('+req.body.id+',"'+req.body.nombre+'","'+req.body.contrasena+'",'+req.body.tipo+')'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                error: err
              });
        } 
        else{
            return res.status(200).json({
                ok: true
              });
        }
    })
}

module.exports=usuariosControlador;