const conexion = require("../config/conexion");

pedidosControlador={};

pedidosControlador.ordenesLocal=async(req,res)=>{
    let sql ='SELECT pedidos.ID,productos.Producto,carrito.Cantidad,carrito.Comentario,usuarios.Nombre as Cliente FROM (((pedidos INNER JOIN carrito ON pedidos.ID = carrito.ID) INNER JOIN usuarios ON carrito.ID_User = usuarios.ID) INNER JOIN productos ON carrito.ID_Producto = productos.ID) where pedidos.Estatus=1 and productos.ID_Local='+req.body.local
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


module.exports=pedidosControlador;