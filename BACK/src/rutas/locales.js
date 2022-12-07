const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const locales=require('../controladores/locales');


router.post("/altaLocal",locales.altaLocal);
router.post("/localpropietario",locales.obtenerLocalPropietario);
router.post("/localesCategoria",locales.LocalesXcategoria);
router.post("/getlocales",locales.getLocales);
router.post("/localesCafeteria",locales.getLocalesXcafeteria);
router.post("/modificarLogo",locales.modificarLocal);
router.post("/localesXcafeteria",locales.LocalesXcafeteria);
router.post("/cantidadProductosLocal",locales.buscarLocalesConMasDeNproductos);

module.exports=router;