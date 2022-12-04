//const router = require('express').Router();
const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const cafeteria=require('../controladores/cafeterias');

router.get("/getCafeterias",cafeteria.getCafeterias);
router.post("/getCafeteria",cafeteria.getCafeteria);
router.post("/altaCafeteria",cafeteria.altaCafeteria);
router.post("/modificarImagen",cafeteria.modificarRuta);

module.exports=router;

  