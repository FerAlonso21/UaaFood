const express=require('express');
const router = express.Router();


const locales=require('../controladores/pedidos');


router.post("/ordenesLocal",locales.ordenesLocal);


module.exports=router;