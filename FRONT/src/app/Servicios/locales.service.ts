import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {
  url='http://localhost:3000/locales/'
  constructor(private http:HttpClient) { }
 

  infoLocalXpropietario(idPropietario:number){
    return this.http.post(this.url+'localpropietario',{propietario:idPropietario})
  }

  altaLocal(cafeteria:string,nombre:string,logo:string,descripcion:string){//muestra el carrito del usuario
    return this.http.post(this.url+'altaLocal',{cafeteria:cafeteria,nombre:nombre,logo:logo,descripcion:descripcion})
  }

  localesXcategoria(categoria:number){//muestra el carrito del usuario
    return this.http.post(this.url+'localesCategoria',{categoria:categoria})
  }

  getLocales(){//muestra el carrito del usuario
    return this.http.post(this.url+'getlocales',{})
  }
  localesXcafeteria(cafeteria:number){//muestra el carrito del usuario
    return this.http.post(this.url+'localesCafeteria',{cafeteria:cafeteria})
  }
}
