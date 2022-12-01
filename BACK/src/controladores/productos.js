const conexion = require("../config/conexion");

productosControlador={};

productosControlador.altaProducto=async(req,res)=>{
    let sql ='insert into productos (ID_Local,Producto,Descripcion,Categoria,Imagen,Catalogo,Precio) values ('+req.body.local+',"'+req.body.producto+'","'+req.body.descripcion+'",'+req.body.categoria+',"'+req.body.imagen+'",'+req.body.catalogo+','+req.body.precio+')'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                info:err
              });
        }
        else{
            return res.status(200).json({
                ok: true
              });
        }
    })
}
productosControlador.getProductosLocal=async(req,res)=>{
    let sql ='select * from productos where ID_Local='+req.body.local
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                info:err
              });
        }
        else{
            return res.status(200).json({
                ok: true,
                info:rows
              });
        }
    })
}

productosControlador.getCategoriaLocal=async(req,res)=>{
    let sql ='select * from productos where ID_Local='+req.body.local+' and Categoria='+req.body.categoria
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                info:err
              });
        }
        else{
            return res.status(200).json({
                ok: true,
                info:rows
              });
        }
    })
}

productosControlador.getProductosLocalPrecioDesc=async(req,res)=>{
    let sql ='select * from productos where ID_local='+req.body.local+' order by Precio asc'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                info:err
              });
        }
        else{
            return res.status(200).json({
                ok: true,
                info:rows
              });
        }
    })
}

productosControlador.getProductosLocalPrecioAsc=async(req,res)=>{
    let sql ='select * from productos where ID_local='+req.body.local+' order by Precio desc'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                info:err
              });
        }
        else{
            return res.status(200).json({
                ok: true,
                info:rows
              });
        }
    })
}

module.exports=productosControlador; 