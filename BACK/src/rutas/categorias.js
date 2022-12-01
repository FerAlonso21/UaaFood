const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const categorias=require('../controladores/categorias');

 
router.post("/altaCategorias",categorias.altaCategoria);
router.post("/getCategorias",categorias.getCategorias);


module.exports=router; 