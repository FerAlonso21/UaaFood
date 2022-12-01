import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url='http://localhost:3000/usuarios/'
  constructor(private http:HttpClient) { }

  
  altaUsuario(id:number,nombre:string,contrasena:string,tipo:number){//muestra el carrito del usuario
    return this.http.post(this.url+'altaUsuario',{id:id,nombre:nombre,contrasena:contrasena,tipo:tipo})
  }
  login(id:number,contrasena:string){//muestra el carrito del usuario
    return this.http.post(this.url+'login',{id:id,contrasena:contrasena})
  }
}
