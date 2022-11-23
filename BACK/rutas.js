const router = require('express').Router();
const jwt = require('jsonwebtoken')
const conexion = require('./src/config/conexion');

const secret_key='Redes22*';
//
//Comentr
//
//este es otro comentario

router.get('/',(req,res)=>{
    let sql ='select * from cafeterias'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});
//hola charly
router.post('/login',(req,res)=>{
  jwt.sign({user:req.body.usuario},secret_key,(err,token)=>{
      res.json({
        token:token
      })
  })
});




router.get('/prueba',verificar,(req,res)=>{
    let sql ='select * from cafeterias'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

function verificar(req,res,next){
    const bearerheader=req.headers['authorization'];

    if(bearerheader !== 'undedined'){
      const token=bearerheader.split(" ")[1];
      req.token=token;
      next();
    }else{
      res.sendStatus(403);
    }
}

router.post('/alta',(req,res)=>{
    console.log(req.body);
    const {id,nombre,contrasena} = req.body;
    let sql =`insert into usuarios(ID,Nombre,Contrasena,Tipo) values (${id},'${nombre}','${contrasena}',2)`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:'equipo agregadp'})
        }
    })
})

//rutas.get('/',function(res,res){
//    res.send("hola desde rutas inicio")
//});

module.exports=router; 