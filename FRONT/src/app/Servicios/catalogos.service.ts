import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datosCatalogo } from '../Interfaces/datosCatalogo.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  url='http://localhost:3000/catalogo/'
  constructor(private http:HttpClient) { }

  crearCatalogo(local:number,producto:number){//crea la tabla del catalogo
    return this.http.post(this.url+'crearCatalogo',{ local:local,producto:producto })
  } 

  altaItemCatalogo(local:number,producto:number,datos:datosCatalogo[]){//muestra el carrito del usuario
    return this.http.post(this.url+'altaCatalogo',{local:local,producto:producto,datos:datos})
  }   

  getCatalogp(local:number,producto:number){//muestra el carrito del usuario
    return this.http.post(this.url+'getCatalogo',{local:local,producto:producto})
  }
}
