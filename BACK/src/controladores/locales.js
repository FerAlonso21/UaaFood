const conexion = require("../config/conexion");

localesControlador={};


localesControlador.buscarLocalesConMasDeNproductos=async(req,res)=>{
    let sql ='select count(ID),ID_Local from productos group by ID_local having count(ID) >'+req.body.cantidad
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

localesControlador.LocalesXcafeteria=async(req,res)=>{
    let sql ='select Cafeterias.Nombre, count(locales.ID) from locales left join cafeterias on locales.ID_Cafeteria=cafeterias.ID group by Nombre'
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

localesControlador.modificarLocal=async(req,res)=>{
    let sql ='update locales set Logo='+req.body.ruta+' where ID='+req.body.local
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true
              });
        }
    })
}

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