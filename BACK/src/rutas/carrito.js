const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const carrito=require('../controladores/carrito');

router.post("/anadirProd",carrito.addCarrito);
router.post("/carritoActivoUsuario",carrito.CarritoActivoUsuario);
router.post("/enviarCarrito",carrito.enviarCarrito);
router.post("/totalCarrito",carrito.totalXcarrito);


module.exports=router;
