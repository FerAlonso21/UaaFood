const express = require('express');
const app = express();
const chalk = require('chalk');
const cors = require('cors');
const jwt =require('jsonwebtoken');

const cafeteriasRutas=require('./rutas/cafeteria');
const catalogorutas=require('./rutas/catalogos');
const localesrutas=require('./rutas/locales');
const categoriasrutas=require('./rutas/categorias');
const publicidadrutas=require('./rutas/publicidad');


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

//ASIGNANDO RUTAS
app.use('/cafeterias',cafeteriasRutas); //EndPoint Cafeterias
app.use('/locales',localesrutas); //EndPoint Cafeterias
app.use('/carrito',cafeteriasRutas); //EndPoint Cafeterias
app.use('/categorias',categoriasrutas); //EndPoint Cafeterias
app.use('/pedidos',cafeteriasRutas); //EndPoint Cafeterias
app.use('/productos',cafeteriasRutas); //EndPoint Cafeterias
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