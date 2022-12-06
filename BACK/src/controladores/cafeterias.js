const conexion = require("../config/conexion");

cafeteriasControlador={};


cafeteriasControlador.modificarRuta=async(req,res)=>{
    let sql ='update cafeterias set imagen='+req.body.ruta+' where ID='+req.body.cafeteria
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true
              });
        }
    })
}

cafeteriasControlador.getCafeterias=async(req,res)=>{
    // let sql ='select * from cafeterias'
    let sql ='call Cafeterias()'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{ 
            return res.status(200).json({
                ok: true,
                info: rows
              });
        }
    })
}
cafeteriasControlador.getCafeteria=async(req,res)=>{
    let sql ='select * from cafeterias where ID='+req.body.id
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            return res.status(200).json({
                ok: true,
                info: rows
              });
        }
    })
}

cafeteriasControlador.altaCafeteria=async(req,res)=>{
    let sql ='insert into cafeterias (Nombre,Ubicacion,imagen) values ("'+req.body.nombre+'","'+req.body.ubicacion+'","'+req.body.imagen+'")'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            return res.status(200).json({
                ok: true
              });
        }
    })
}

module.exports=cafeteriasControlador;