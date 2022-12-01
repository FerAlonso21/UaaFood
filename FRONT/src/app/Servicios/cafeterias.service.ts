import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CafeteriasService {

  url='http://localhost:3000/cafeterias/'
  constructor(private http:HttpClient) { }

  getCafeterias(){
    return this.http.get(this.url+'getCafeterias')
  }

}
