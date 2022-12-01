const conexion = require("../config/conexion");

publicidadControlador={};

publicidadControlador.altaPublicidad=async(req,res)=>{
    let sql ='insert into publicidad (Local,Imagen) values ('+req.body.local+',"'+req.body.imagen+'")'
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
publicidadControlador.getPublicidad=async(req,res)=>{
    let sql ='select * from publicidad'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                error: err
              });
        } 
        else{
            return res.status(200).json({
                ok: true,

              });
        }
    })
}

module.exports=publicidadControlador;