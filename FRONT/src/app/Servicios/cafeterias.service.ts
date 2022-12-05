import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CafeteriasService {

  url='http://localhost:3000/own/'
  constructor(private http:HttpClient) { }

  getCafeterias(){
    return this.http.post(this.url+'getInfoProfile',{mail:'roiter2'})
  }
  getCafeteria(id:number){
    return this.http.post(this.url+'getCafeteria',{id:id})
  }

  altaCafeteria(nombre:string,ubicacion:string,imagen:string){
    return this.http.post(this.url+'getCafeteria',{nombre:nombre,ubicacion:ubicacion,imagen:imagen})
  }
}
