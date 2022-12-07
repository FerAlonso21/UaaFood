const conexion = require("../config/conexion");

publicidadControlador={};

publicidadControlador.localesConPublicidad=async(req,res)=>{
    let sql ='select distinct local,locales.Nombre from publicidad left join locales on publicidad.Local=locales.ID;'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{  
            return res.status(200).json({
                ok: true,
                info:rows
              });
        }
    })
}

publicidadControlador.EliminarPublicidadXlocal=async(req,res)=>{
    let sql ='delete from publicidad where Local='+req.body.local
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true
              });
        }
    })
}

publicidadControlador.EliminarPublicidad=async(req,res)=>{
    let sql ='delete from publicidad where ID='+req.body.id
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true
              });
        }
    })
}

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