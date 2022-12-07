import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params} from '@angular/router';
import { CarritoService } from 'src/app/Servicios/carrito.service';
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
  sabores:any=[];
  productoID: any;
  contador:number=1;
  coment:string='';
  descripcion:string='';
  total: number=0;
  extra: number=0;

  formulario!: FormGroup;

  
  constructor(private fb: FormBuilder,private router: ActivatedRoute, private ServicioMenu:ProductosService,private servicioLocales:LocalesService,private servicioCatalogo:CatalogosService,private servicioCarrito:CarritoService) { }


  producto:any='';
  tipo:number=0;
  idUsuario:number=0;

  ngOnInit(): void { 
  this.formulario = this.fb.group({
    comentario: ['', Validators.required],
    sabor: ['', Validators.required],

  });
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
    this.sabores=[];
    let aux: number=0;
    console.log(id);
    this.ServicioMenu.productoXid(id).subscribe((res:any)=>{
      if(res.ok==true){
          this.producto=res.info[0];
          
          if(this.producto.Catalogo==1){
            aux=parseInt(this.idLocal);
            console.log(aux);
            this.servicioCatalogo.getCatalogp(aux,id).subscribe((res:any)=>{
              if(res.ok==true){
                
                for(let i of res.info){
                  this.sabores.push(i);
                  
                 }
                 console.log(this.sabores);
              }
            })
        
          }  
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
  enviarCarrito(): void{
    if(this.tipo==1){
      let aux = this.producto.Precio;
      console.log(this.formulario.get('sabor')?.value);

      for(let i of this.sabores){
        if((this.formulario.get('sabor')?.value)==i.ID){
          this.extra=i.Precio;
          this.descripcion=i.Descripcion;
        }
      }
      console.log("extra:"+this.extra);
      this.extra=this.extra*this.contador;
      this.total=(parseInt(aux))*(this.contador);
      this.total=this.total+this.extra;
      console.log(this.formulario.get('sabor')?.value);
      console.log("usuario="+this.idUsuario," producto="+this.producto.ID," cantidad="+this.contador," sabor="+this.descripcion," comentario="+this.formulario.get('comentario')?.value," total="+this.total);
      console.log(typeof(this.idUsuario),typeof(this.producto.ID),typeof(this.contador),typeof(this.descripcion),typeof(this.formulario.get('comentario')?.value),typeof(this.total));

      this.servicioCarrito.anadirProducto(this.idUsuario,this.producto.ID,this.contador,this.descripcion,this.formulario.get('comentario')?.value,this.total).subscribe((res:any)=>{
        console.log(res);
        if(res.ok==true){
           console.log("se subio al carrito");
        }
      })
    }

  }

}
