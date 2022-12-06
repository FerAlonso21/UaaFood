import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private servicioCafeterias:CafeteriasService) { }
  cafeterias:any=[];
  
  ngOnInit(): void {
    this.servicioCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        
       this.cafeterias=res.info[0]
       console.log(this.cafeterias)

      }
    })

  }

  

}
