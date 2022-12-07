import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datosCatalogo } from 'src/app/Interfaces/datosCatalogo.interface';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { CarritoService } from 'src/app/Servicios/carrito.service';
import { CatalogosService } from 'src/app/Servicios/catalogos.service';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  
  constructor(private ServicioUsuarios:UsuariosService, private ServicioCarrito:CarritoService, private ServicioProducto:ProductosService) { }
   id:any;
   tipo:number=0;
   carrito: any=[];
   nombres: string[]=[];
   contador:number=1;

  ngOnInit(): void {

    let aux: any;
    this.id=sessionStorage.getItem('id');
    if(sessionStorage.getItem('tipo')!=null){
      aux=sessionStorage.getItem('tipo');
      this.tipo=parseInt(aux);
      console.log(typeof(this.tipo));
    }
   

    this.ServicioCarrito.carritoUsuario(this.id).subscribe(async (res:any)=>{
      if(res.ok==true){
       
        for(let i of res.info){
          this.carrito.push(i);

          this.ServicioProducto.productoXid(i.ID_Producto).subscribe(async (res:any)=>{
            if(res.ok==true){
              for(let i of res.info){
                this.nombres.push(i.Producto);
                console.log(i.Producto);
            }
            }
          })
      }
      console.log(typeof(this.nombres));
      console.log(this.carrito);
      
      }
    })
  }

  mas(): void{
    this.contador++;
  }
  menos(): void{
    if(this.contador>1){
      this.contador--;
    }
    
  }

  

}