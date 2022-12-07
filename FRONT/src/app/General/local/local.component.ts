import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { CatalogosService } from 'src/app/Servicios/catalogos.service';
import { LocalesService } from 'src/app/Servicios/locales.service';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  idLocal: any;
  menu:any=[];
  productoID: any;
  contador:number=1;
  coment:string='';
  constructor(private router: ActivatedRoute, private ServicioMenu:ProductosService,private servicioLocales:LocalesService,private servicioCatalogo:CatalogosService) { }


  producto:any='';
  tipo:number=0;
  idUsuario:number=0;

  ngOnInit(): void { 

  this.router.queryParams.subscribe(
      (params: Params)=>{
        this.idLocal = params['ID']; 
        console.log("entre al params");
        
      }
    )
    
    this.ServicioMenu.productosXlocal(this.idLocal).subscribe((res:any)=>{
      console.log("entre al menu");
      if(res.ok==true){
        for(let i of res.info[0]){
          this.menu.push(i);
          
         }
         console.log(this.menu);
      }
    })

    let aux: any;
    let aux2:any;
    if(sessionStorage.getItem('tipo')!=null){
      aux=sessionStorage.getItem('tipo');
      aux2=sessionStorage.getItem('id');
      this.tipo=parseInt(aux);
      this.idUsuario=parseInt(aux2);
    }
  }


  verProducto(id:any): void{
    this.contador=1;
    console.log(id);
    this.ServicioMenu.productoXid(id).subscribe((res:any)=>{
      if(res.ok==true){
          this.producto=res.info[0];
          console.log(this.producto);
          if(this.producto.Categoria==1){
            
            this.servicioCatalogo.getCatalogp(this.idLocal,this.productoID).subscribe((res:any)=>{
              if(res.ok==true){
                console.log("---");
                 console.log(res);
              }
            })
        
          }  
      }
    })
    console.log(this.producto);
    if(this.producto.Categoria==1){
      
      this.servicioCatalogo.getCatalogp(this.idLocal,this.productoID).subscribe((res:any)=>{
        if(res.ok==true){
          console.log("---");
           console.log(res);
        }
      })
  
    }  

  }
  mas(): void{
    this.contador++;
  }
  menos(): void{
    if(this.contador>1){
      this.contador--;
    }
    
  }
  enviarCarrito(): void{
    let aux = this.producto.Precio;
    
    let total: number=(parseInt(aux))*(this.contador);
    console.log(this.producto.Precio);
    console.log("usuario="+this.idUsuario," producto="+this.producto.ID," cantidad="+this.contador," sabor=null"," comentario="+this.coment," total="+total);
  }

}
