import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { datosCatalogo } from 'src/app/Interfaces/datosCatalogo.interface';
import { CatalogosService } from 'src/app/Servicios/catalogos.service';
import { LocalesService } from 'src/app/Servicios/locales.service';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.css']
})
export class AltaProductosComponent implements OnInit {
  infoLocal:any='';
  prueba:string='auto'
  idlocal:number=0;
  add:number=0;
  menu:any;
  idproducto:number=0;
  validar:boolean=false;
  infoProducto:any='';
  datosPcatalogo:datosCatalogo[]=[
    {
      precio:0,
      descripcion:''
    }
  ]
  private fileTmp:any;

  formulario!:FormGroup;
  formulario2!:FormGroup;
  constructor(private sevicioCatalogo:CatalogosService,private servicioLocal:LocalesService,private servicioProductos:ProductosService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.formulario2=this.fb.group({
      precio:['',Validators.required]
    })

    this.formulario=this.fb.group({
        Producto:['',Validators.required],
        Precio:['',Validators.required],
        Descripcion:['',Validators.required],
        Imagen:['',Validators.required],
        Categoria:['',Validators.required],
        Catalogo:['',Validators.required],
        InfoCatalogo:this.fb.array([])
    })


    sessionStorage.setItem('idl','3')
    this.servicioLocal.infoLocalXpropietario(Number( sessionStorage.getItem('idl'))).subscribe((res:any)=>{
      if(res.ok==true){
        this.infoLocal=res.info[0];
        
        this.idlocal=Number(res.info[0].ID);
        this.servicioProductos.productosXlocal(this.idlocal).subscribe((res:any)=>{
          if(res.ok==true){
            this.menu=res.info[0];
          }
      })
      }
    })

    
  }

  get InfoCatalogo(){
    return this.formulario.get('InfoCatalogo') as FormArray;
  }

  addInfoCat(){
    this.InfoCatalogo.push(
      this.fb.group({
        precio:['',Validators.required],
        descripcion:['',Validators.required]
      })
    )
  }

  deleteInfoCat(index:number){
    this.InfoCatalogo.removeAt(index)
    //this.Turnos.removeAt(AccionIndex);
  }

  getFile($event: any): void {
    const [file] = $event.target.files;
    let ext = file.name.split('.');
    this.fileTmp = {
      fileRaw: file,
      extension: ext[ext.length - 1],
    };
  }

  agregarItem(){
    let aux;
    let tienecatalogo=false;
    const body=new FormData(); 
    let nombrearchivo='Local'+this.idlocal+'_'+this.formulario.get('Producto')?.value+'.'+ this.fileTmp.extension;
    
    body.append('myfile',this.fileTmp.fileRaw,nombrearchivo);
    this.servicioProductos.altaImagen(body).subscribe((res1:any)=>{
      if(res1.ok==true){
        if(this.formulario.get('Catalogo')?.value==1){
          tienecatalogo=true
          this.datosPcatalogo=this.InfoCatalogo.value;
        }
        this.servicioProductos.altaProducto(this.idlocal,this.formulario.get('Producto')?.value,this.formulario.get('Descripcion')?.value,this.formulario.get('Categoria')?.value,'http://localhost:3000/'+nombrearchivo,tienecatalogo,this.formulario.get('Precio')?.value).subscribe((res2:any)=>{
          if(res2.ok==true){
            if(this.formulario.get('Catalogo')?.value==true){
             
             
              this.sevicioCatalogo.crearCatalogo(this.idlocal,res2.info).subscribe((res3:any)=>{
                if(res3.ok==true){
                  
                  this.sevicioCatalogo.altaItemCatalogo(this.idlocal,res2.info,this.datosPcatalogo).subscribe((res4:any)=>{
                    if(res4.ok==true){
                      this.formulario.reset();
                      this.menu=[];
                      this.servicioProductos.productosXlocal(this.idlocal).subscribe((res5:any)=>{
                        if(res5.ok==true){
                          this.menu=res5.info[0];
                        }
                    })
                    }
                  })
                }
              })
            }
          }
        })
      }
    })
    
  }

  detalleProducto(id:number){
    if(this.add==2){
      this.idproducto=id;
      this.validar=true;
      this.servicioProductos.productoXid(id).subscribe((res:any)=>{
        if(res.ok==true){
          this.infoProducto=res.info[0]
          console.log(this.infoProducto)
        }
      })
    }
    
  }

  actualizarPrecio(){
      this.servicioProductos.modificarPrecio(this.idproducto,this.formulario2.get('precio')?.value).subscribe((res:any)=>{
        if(res.ok==true){
          this.formulario2.reset();
          this.menu=[];
                      this.servicioProductos.productosXlocal(this.idlocal).subscribe((res5:any)=>{
                        if(res5.ok==true){
                          this.menu=res5.info[0];
                        }
                    })

        }
      })
  }

  anadirProd(){
    this.prueba='auto'
    this.add=1;
  }

  modificarProd(){
    this.prueba='pointer'
    this.add=2;
  }

}
