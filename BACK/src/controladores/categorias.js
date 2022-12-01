const conexion = require("../config/conexion");

categoriasControlador={};

categoriasControlador.altaCategoria = async (req, res) =>{
    let sql ='insert into categorias (Descripcion) values ("'+req.body.descripcion+'")'
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

categoriasControlador.getCategorias = async (req, res) =>{
    let sql ='select * from categorias'
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

module.exports=categoriasControlador;