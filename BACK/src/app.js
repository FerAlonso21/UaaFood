const express = require('express');
const app = express();
const chalk = require('chalk');
const cors = require('cors');
const jwt =require('jsonwebtoken');
const morgan=require('morgan');
const multer=require('multer')
const fs =require('fs')

const cafeteriasRutas=require('./rutas/cafeteria');
const catalogorutas=require('./rutas/catalogos');
const localesrutas=require('./rutas/locales');
const categoriasrutas=require('./rutas/categorias');
const publicidadrutas=require('./rutas/publicidad');
const productosrutas=require('./rutas/productos');
const carritorutas=require('./rutas/carrito');
const pedidosrutas=require('./rutas/pedidos');

require('../src/config/conexion') ;

app.use(cors());

const port =(process.env.port || 3000);
const options = {
  cors: {
    origin: 'http://localhost:4200',
  },
};

const server = require('http').Server(app);
const io = require('socket.io')(server, options);

io.on('connection', function (socket) {

  const handshake = socket.id;

  let { nameRoom } = socket.handshake.query;
  console.log(`${chalk.green(`Nuevo dispositivo: ${handshake}`)} conentado a la ${nameRoom}`);
  socket.join(nameRoom)

  socket.on('evento', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento', res);

  })
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

app.use(express.json()) 

app.set('port',port);

//MIDDLEWARES
app.use(morgan('dev'));

app.use(express.static('public'));


const storage=multer.diskStorage({
  filename:function(res,file,cb){
      const ext= file.originalname.split('.')[1];

      cb(null,`${ext[0]}.${ext}`);
  },
  destination:function(res,file,cb){
      console.log(__dirname);
      cb(null,'./public/'+file.originalname);
  }
})
const upload=multer({storage:storage});
app.post("/archivo",upload.single('myfile'),(req,res)=>{        
  res.send({
      ok:true,
      msg:"Alta de Layout Exitosa"
  })
})
//ASIGNANDO RUTAS
app.use('/cafeterias',cafeteriasRutas); //EndPoint Cafeterias
app.use('/locales',localesrutas); //EndPoint Cafeterias 
app.use('/carrito',carritorutas); //EndPoint Cafeterias
app.use('/categorias',categoriasrutas); //EndPoint Cafeterias
app.use('/pedidos',pedidosrutas); //EndPoint Cafeterias
app.use('/productos',productosrutas); //EndPoint Cafeterias
app.use('/publicidad',publicidadrutas); //EndPoint Cafeterias
app.use('/usuarios',cafeteriasRutas); //EndPoint Cafeterias
app.use('/catalogo',catalogorutas); //EndPoint Cafeterias


app.use('/',(req,res)=>{
  res.status(200).json({ 
      respuesta:"Exito"
  })
})

server.listen(3000, function () {
  console.log('\n')
  console.log(`>> Socket listo y escuchando por el puerto: ${chalk.green('3000')}`)
})