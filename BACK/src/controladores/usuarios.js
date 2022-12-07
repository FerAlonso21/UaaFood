const conexion = require("../config/conexion");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Redes22'

usuariosControlador = {};

usuariosControlador.login=async(req,res)=>{
    let sql ='select * from usuarios where ID='+req.body.id
     conexion.query(sql,async (err,rows,fields)=>{
        if(err){
            
            throw err;
        } 
        else{
          
            const contraValida =await  bcrypt.compare(req.body.contrasena,rows[0].Contrasena);
            if (contraValida){
                const expiresIn= 24*60*60;
                const accesToken =jwt.sign({id: rows.ID},SECRET_KEY,{expiresIn:expiresIn});
                return res.status(200).json({
                    ok:true,
                    usuario:rows[0].Nombre,
                    tipo:rows[0].Tipo,
                    accesToken:accesToken,
                    expiresIn:expiresIn 
                });
            }else{

                return res.status(200).json({
                    ok:false,   
                    msg:"contraseña incorrecta" 
                });
            }
        }
    })
}

usuariosControlador.altaUsuario = async (req, res) => {
    let contra = bcrypt.hashSync(req.body.contrasena)
    let sql = 'insert into usuarios (ID,Nombre,Contrasena,Tipo) values (' + req.body.id + ',"' + req.body.nombre + '","' + contra + '",' + req.body.tipo + ')'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            return res.status(400).json({
                ok: true
                
              });
          
        }
    })
}

module.exports = usuariosControlador;