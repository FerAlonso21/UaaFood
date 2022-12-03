const conexion = require("../config/conexion");

catalogoControlador = {};

catalogoControlador.crearCatalogo = async (req, res) => {
    let sql = 'create table C' + req.body.local + '_' + req.body.producto + ' (ID int auto_increment, Descripcion varchar(50), Precio float, primary key (ID))'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {

            return res.status(400).json({
                ok: false,
                info: err
            });
        }
        else {
            return res.status(200).json({
                ok: true
            });
        }
    })
}

catalogoControlador.altaCatalogo = async (req, res) => {
    let sql;
    let cont = 0;
    for (let i of req.body.datos) {
        sql = 'insert into c' + req.body.local + '_' + req.body.producto + ' (Descripcion, Precio) values ("' + i.descripcion + '",' + i.precio + ')'
        conexion.query(sql, (err, rows, fields) => {
            if (err) {
                return res.status(400).json({
                    ok: false, 
                    error: err
                });
            }
            else {
                cont++;
                if (req.body.datos.length == cont) {
                    return res.status(200).json({
                        ok: true
                    });
                }
            }
        })
    }



}

catalogoControlador.getCatalogo = async (req, res) =>{
    let sql = 'select * from c'+req.body.local+'_'+req.body.producto
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

module.exports = catalogoControlador;

