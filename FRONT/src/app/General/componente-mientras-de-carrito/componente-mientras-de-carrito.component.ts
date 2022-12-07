import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Servicios/carrito.service';

@Component({
  selector: 'app-componente-mientras-de-carrito',
  templateUrl: './componente-mientras-de-carrito.component.html',
  styleUrls: ['./componente-mientras-de-carrito.component.css']
})
export class ComponenteMientrasDeCarritoComponent implements OnInit {

  constructor(private router:Router,private servicioCarrito:CarritoService) { }
  
  informacionCarrito:any;

  ngOnInit(): void {
    
    sessionStorage.setItem('tipo','3')
    this.servicioCarrito.carritoUsuario(Number(sessionStorage.getItem('tipo'))).subscribe((res:any)=>{
      this.informacionCarrito=res.info;
      console.log(this.informacionCarrito);
    })
  }

  enviarPedido(){
    this.router.navigate(['/room:'+15]);
  }

}
