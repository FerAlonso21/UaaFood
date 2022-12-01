import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url='http://localhost:3000/productos/'
  constructor(private http:HttpClient) { }

altaProducto(local:number,producto:string,descripcion:string,categoria:number,imagen:string,catalogo:boolean,precio:number){//muestra el carrito del usuario
  return this.http.post(this.url+'altaProducto',{local:local,producto:producto,descripcion:descripcion,categoria:categoria,imagen:imagen,catalogo:catalogo,precio:precio})
}
productosXlocal(local:number){//muestra el carrito del usuario
  return this.http.post(this.url+'productosLocal',{local:local})
}
categoriaXlocal(local:number,categoria:number){//muestra el carrito del usuario
  return this.http.post(this.url+'categoriaLocal',{local:local,categoria:categoria})
}
ProductosXpreciodescXlocal(local:number){//muestra el carrito del usuario
  return this.http.post(this.url+'PreciosDescLocal',{local:local})
}
aProductosXprecioascXlocal(local:number){//muestra el carrito del usuario
  return this.http.post(this.url+'PreciosAscLocal',{local:local})
}
}
