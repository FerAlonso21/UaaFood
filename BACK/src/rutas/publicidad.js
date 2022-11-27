const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const locales=require('../controladores/publicidad');


router.post("/altaPublicidad",locales.altaPublicidad);
router.post("/getPublicidad",locales.getPublicidad);


module.exports=router;