import { Component, OnInit } from '@angular/core';
import { datosCatalogo } from 'src/app/Interfaces/datosCatalogo.interface';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { CatalogosService } from 'src/app/Servicios/catalogos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
 
  
  datos:datosCatalogo[]=[{
    descripcion:'descuno',
    precio:15.4
  },{
    descripcion:'nuevasde',
    precio:78.5
  }];

  constructor(private servicioCafeterias:CafeteriasService, private serviciocatalogo:CatalogosService) { }
  cafeterias:string[]=[]
  
  ngOnInit(): void {
    this.servicioCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        for(let i of res.info){
            this.cafeterias.push(i.Nombre);
            console.log(i.Nombre)
        }
      }
    })




    // this.serviciocatalogo.crearCatalogo(2,2).subscribe((res:any)=>{
    //   if(res.ok==true){
    //     console.log("si hizo la tabla");
    //     this.serviciocatalogo.altaItemCatalogo(2,2,this.datos).subscribe((res:any)=>{
    //       console.log(res) 
    //     })
    //   }
    // })
    
  }

}
