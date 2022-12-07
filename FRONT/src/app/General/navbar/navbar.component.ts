import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datosCatalogo } from 'src/app/Interfaces/datosCatalogo.interface';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { CatalogosService } from 'src/app/Servicios/catalogos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  
  constructor(private ServicioUsuarios:UsuariosService ) { }
   id:any;
   tipo:number=0;

  ngOnInit(): void {
    let aux: any;
    this.id=sessionStorage.getItem('id');
    if(sessionStorage.getItem('tipo')!=null){
      aux=sessionStorage.getItem('tipo');
      this.tipo=parseInt(aux);
      console.log(typeof(this.tipo));
    }
    console.log(this.id);
    console.log(this.tipo);
  }
  

}