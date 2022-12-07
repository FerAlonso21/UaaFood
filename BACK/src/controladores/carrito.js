const conexion = require("../config/conexion");

carritoControlador = {};

carritoControlador.totalXcarrito = async (req, res) =>{
    let sql = 'select SUM(Total) from carrito where ID_User='+req.body.user+' and Enviado=false'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            return res.status(200).json({
                ok: true,
                info: rows
            });
        }
    })
}

carritoControlador.addCarrito = async (req, res) => {
    console.log(req.body);
    //let sql = 'insert into carrito (ID_User,ID_Producto,Cantidad,Sabor,Comentario,Total,Enviado) values (' + req.body.usuario + ',' + req.body.producto + ',' + req.body.cantidad + ',"' + req.body.sabor + '","' + req.body.comentario + '",' + req.body.total + ',false)'
    let sql='call P_Carrito('+ req.body.usuario + ',' + req.body.producto + ',' + req.body.cantidad + ',"' + req.body.sabor + '","' + req.body.comentario + '",' + req.body.total+',false)'
   
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            return res.status(200).json({
                ok: true
            });
        }
    })
}

carritoControlador.CarritoActivoUsuario = async (req, res) => {
    let sql = 'select * from carrito where ID_User=' + req.body.usuario + ' and Enviado=false'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            return res.status(200).json({
                ok: true,
                info: rows
            });
        }
    })
}      

carritoControlador.enviarCarrito = async (req, res) => {
    
    let sql2 = 'select ID from carrito where ID_User=' + req.body.usuario + ' and Enviado=false'
    conexion.query(sql2, (err, rows1, fields) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            
            let sql = 'update carrito set Enviado=true where ID_User=' + req.body.usuario + ' and Enviado=false'
            conexion.query(sql, (err, rows, fields) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        error: err
                    });
                }
                else {
                    for (let i of rows1) {
                        
                        let sql = 'insert into pedidos (ID,Estatus) values (' +i.ID+','+'1)'
                        conexion.query(sql, (err, rows, fields) => {
                            if (err) {
                                return res.status(400).json({
                                    ok: false,
                                    error: err
                                });
                            }
                            
                        })
                    }
                    
                    
                }
            })
        }
        
        return res.status(200).json({
            ok: true
        });
    })


}


module.exports = carritoControlador;