import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { LocalesService } from 'src/app/Servicios/locales.service';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  formulario!:FormGroup;
  formulario2!:FormGroup;
  cafeterias:any;
    private fileTmp:any;

  locales:any;
  anadir:number=0;
  constructor(private servicioCafeterias:CafeteriasService,private servicioLocales:LocalesService,private fb:FormBuilder,private servicioProductos:ProductosService) { }

  ngOnInit(): void {
    
    this.formulario=this.fb.group({
      Nombre:['',Validators.required],
      Ubicacion:['',Validators.required],
      Imagen:['',Validators.required]
  })
  this.formulario2=this.fb.group({
    Id_caf:['',Validators.required],
    Name:['',Validators.required],
    Imageen:['',Validators.required],
    Desc:['',Validators.required]
})

    this.servicioCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        this.cafeterias=res.info[0]
        console.log(this.cafeterias)
      }
    })
  }

  addCafeteria(){
    // altaCafeteria(nombre:string,ubicacion:string,imagen:string){
    //   return this.http.post(this.url+'getCafeteria',{nombre:nombre,ubicacion:ubicacion,imagen:imagen})
    // }
    this.anadir=1;
    const body=new FormData(); 
    let nombrearchivo='Cafeteria'+'_'+this.formulario.get('Nombre')?.value+'.'+ this.fileTmp.extension;
    
    body.append('myfile',this.fileTmp.fileRaw,nombrearchivo);
    this.servicioProductos.altaImagen(body).subscribe((res1:any)=>{
     this.servicioCafeterias.altaCafeteria(this.formulario.get('Nombre')?.value,this.formulario.get('Ubicacion')?.value,'http://localhost:3000/'+nombrearchivo);

    }
  )}

  addLocal(){
    
    //(ID_Cafeteria,Nombre,Logo,Descripcion)
    const body=new FormData(); 
    let nombrearchivo='Local'+'_'+this.formulario.get('Name')?.value+'.'+ this.fileTmp.extension;
    body.append('myfile',this.fileTmp.fileRaw,nombrearchivo);
    this.servicioProductos.altaImagen(body).subscribe((res1:any)=>{
      this.servicioLocales.altaLocal(this.formulario.get('Id_cafe')?.value,this.formulario.get('Name')?.value,'http://localhost:3000/'+nombrearchivo,this.formulario.get('Desc')?.value);
 
    }
  )}
    aloc(){
      this.anadir=2;
    }
    acafe(){
      this.anadir=1;
    }
  getFile($event: any): void {
    const [file] = $event.target.files;
    let ext = file.name.split('.');
    this.fileTmp = {
      fileRaw: file,
      extension: ext[ext.length - 1],
    };
  }
  infolocales(cafe:number){
    this.servicioLocales.localesXcafeteria(cafe).subscribe((res:any)=>{
      console.log(res);
      if(res.ok==true){
        this.locales=res.info
      }
    })
  }

}
