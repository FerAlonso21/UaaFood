const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');


const locales=require('../controladores/publicidad');


router.post("/altaPublicidad",locales.altaPublicidad);
router.post("/getPublicidad",locales.getPublicidad);
router.post("/eliminarPublicidad",locales.EliminarPublicidad);
router.post("/eliminarPublicidad",locales.EliminarPublicidadXlocal);
router.post("/localesPublicidad",locales.localesConPublicidad);
 


module.exports=router;