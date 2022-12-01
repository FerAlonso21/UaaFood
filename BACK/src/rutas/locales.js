const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const locales=require('../controladores/locales');


router.post("/altaLocal",locales.altaLocal);
router.post("/localesCategoria",locales.LocalesXcategoria);
router.post("/getlocales",locales.getLocales);
router.post("/localesCafeteria",locales.getLocalesXcafeteria);

module.exports=router;