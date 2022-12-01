import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url='http://localhost:3000/categorias/'
  constructor(private http:HttpClient) { }
  
altaCategorias(descripcion:string){//muestra el carrito del usuario
  return this.http.post(this.url+'altaCategorias',{descripcion:descripcion})
}

getCategorias(){//muestra el carrito del usuario
  return this.http.post(this.url+'getCategorias',{})
}

}
