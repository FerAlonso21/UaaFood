const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const usuarios=require('../controladores/usuarios');


router.post("/altaUsuario",usuarios.altaUsuario);
router.post("/login",usuarios.login);

  

module.exports=router;