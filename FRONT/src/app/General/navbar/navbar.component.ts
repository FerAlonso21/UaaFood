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

  constructor(private servicoCafeterias:CafeteriasService, ) { }

  ngOnInit(): void {
    this.servicoCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        for(let i of res.info){
            console.log(i.Nombre)
        }
      }
    })

   
    
  }

}
