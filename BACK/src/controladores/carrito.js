const conexion = require("../config/conexion");

carritoControlador={};

carritoControlador.addCarrito=async(req,res)=>{
    console.log(req.body);
    let sql ='insert into carrito (ID_User,ID_Producto,Cantidad,Sabor,Comentario,Total,Enviado) values ('+req.body.usuario+','+req.body.producto+','+req.body.cantidad+',"'+req.body.sabor+'","'+req.body.comentario+'",'+req.body.total+',false)'
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

module.exports=carritoControlador;