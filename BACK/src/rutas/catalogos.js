const express=require('express');
const router = express.Router();
const conexion = require('../config/conexion');

const ctlg=require('../controladores/catalogos');

 
router.post("/crearCatalogo",ctlg.crearCatalogo);
router.post("/altaCatalogo",ctlg.altaCatalogo);
router.post("/getCatalogo",ctlg.getCatalogo);

module.exports=router; 