import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  url='http://localhost:3000/publicidad/'
  constructor(private http:HttpClient) { }

  

  altaPublicidad(local:number,imagen:string){//muestra el carrito del usuario
    return this.http.post(this.url+'altaPublicidad',{local:local,imagen:imagen})
  }

  getPublicidad(){//muestra el carrito del usuario
    return this.http.post(this.url+'getPublicidad',{})
  }
}
