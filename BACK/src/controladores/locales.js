const conexion = require("../config/conexion");

localesControlador={};

localesControlador.getLocales=async(req,res)=>{
    let sql ='select * from locales '
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
                info: rows
              });
        }
    })
}

localesControlador.getLocalesXcafeteria=async(req,res)=>{
    let sql ='select * from locales where ID_Cafeteria='+req.body.cafeteria
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
                info: rows
              });
        }
    })
}

localesControlador.LocalesXcategoria=async(req,res)=>{
    let sql ='select distinct Locales.*  from Locales inner join productos on locales.ID=productos.ID_Local where Categoria='+req.body.categoria
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
                info: rows
              });
        }
    })
}

localesControlador.altaLocal=async(req,res)=>{
    let sql ='insert into locales (ID_Cafeteria,Nombre,Logo,Descripcion) values ('+req.body.cafeteria+',"'+req.body.nombre+'","'+req.body.logo+'","'+req.body.descripcion+'")'
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
module.exports=localesControlador;