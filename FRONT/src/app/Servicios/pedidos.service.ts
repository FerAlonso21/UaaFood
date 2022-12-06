import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url='http://localhost:3000/pedidos/'
  constructor(private http:HttpClient) { }

  getLocales(){//muestra el carrito del usuario
    return this.http.post(this.url+'getlocales',{})
  }
  getPedidosXlocal(local:number){
    return this.http.post(this.url+'ordenesLocal',{local:local})
  }
}
