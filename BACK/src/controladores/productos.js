const conexion = require("../config/conexion");

productosControlador={};

productosControlador.productoXid=async(req,res)=>{
    let sql ='select * from productos where ID='+req.body.id
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

productosControlador.productoMasCaroXlocal=async(req,res)=>{
    let sql ='select max(Precio),producto from productos where ID_Local='+req.body.local
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

productosControlador.productoMasBaratoXlocal=async(req,res)=>{
    let sql ='select min(Precio),producto from productos where ID_Local='+req.body.local
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

productosControlador.modificarPrecioSinCatalogo=async(req,res)=>{
    let sql ='update productos set Precio='+req.body.precio+' where ID='+req.body.id
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true
              });
        }
    })
}

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
            let sql2 = 'SELECT LAST_INSERT_ID()'
            conexion.query(sql2, (err, rows2, fields) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        error: err
                    });
                }
                else {
                    let auxstring=JSON.stringify(rows2);
                    let dividir=auxstring.split(':');
                    let aux1 =dividir[1];
                    let aux2 =aux1.split('}');

                
                   console.log("aux2",aux2[0]);
                    return res.status(200).json({
                        ok: true,
                        info:parseInt(aux2)

                    });
                }
            })
        }
    })
}
productosControlador.getProductosLocal=async(req,res)=>{
   // let sql ='select * from productos where ID_Local='+req.body.local
   let sql ='call ProductosXLocal('+req.body.local+')'
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