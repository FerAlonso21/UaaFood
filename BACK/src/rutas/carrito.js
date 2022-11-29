const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const carrito=require('../controladores/carrito');

router.get("/anadirProd",carrito.addCarrito);


module.exports=router;
