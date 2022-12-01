import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url='http://localhost:3000/carrito/'
  constructor(private http:HttpClient) { }

  anadirProducto(usuario:number,producto:number,cantidad:number,sabor:string,comentario:string,total:number){//añade productos al carro
    return this.http.post(this.url+'anadirProd',{usuario:usuario,producto:producto,cantidad:cantidad,sabor:sabor,comentario:comentario,tota:total})
  }
  carritoUsuario(usuario:number){//muestra el carrito del usuario
    return this.http.post(this.url+'carritoActivoUsuario',{usuario:usuario})
  }

  envioCarrito(usuario:number){//envia el carrito a realizarse 
    return this.http.post(this.url+'getCaenviarCarrito',{usuario:usuario})
  }
  /*
    1.En el constructor inyectar el modulo Http
    2.Definir una variable (url) la cual sera un string con la ruta del servidor(Esta ruta sera hasta 
      el endpoint correspondiente, este endpoint se encuentra en el archivo app.js de la carpeta del back ->Back/src/app.js), 
    3.Poner las funciones que llamaran a la ruta en especifico, guiate de servicio de cafeterias, ahi esta uno ,
    que igual te dejo abajo

     getCafeterias(){
     return this.http.get(this.url+'getCafeterias')
    }
    aqui ojo, en el htt.GET , el get sera para las rutas que desde el back estan configuradas como get , cambia
    a POST las que esatn en post 
    la estructura del post sera 

    getCafeterias(argumento){
     return this.http.post(this.url+'getCafeterias',{parametro:argumento})
    }

    al ser post indican que ocupan de algun parametro en el back, ese argumento lo recibe la funcion en los parentesis

    Ya seria todo
    Ahora para usar estos servicios

    En el ts del componente en su constructor inyectas el nombr del servcio a usar y ya esta listo para usarse 
    por ejemplo 

    para usarlo seria

    nombreServicio.Funciones_Declaradas_Aqui().subscribe((res:any)=>{
      console.log(Res)  --->>>> aQUI res es lo que retorna la consulta del back
      
    })
  */
}
