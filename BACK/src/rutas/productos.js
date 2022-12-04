const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const productos=require('../controladores/productos');


router.post("/altaProducto",productos.altaProducto);
router.post("/productosLocal",productos.getProductosLocal);
router.post("/categoriaLocal",productos.getCategoriaLocal);
router.post("/PreciosDescLocal",productos.getProductosLocalPrecioDesc);
router.post("/PreciosAscLocal",productos.getProductosLocalPrecioAsc);
router.post("/modificarPrecioSCtl",productos.modificarPrecioSinCatalogo);
router.post("/productoCaroLocal",productos.productoMasCaroXlocal);
router.post("/productoBaraLocal",productos.productoMasBaratoXlocal);

module.exports=router;