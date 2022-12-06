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
 
  id=0;
  cont='';
  constructor(private ServicioUsuarios:UsuariosService ) { }
  cafeterias:any=[];
  
  ngOnInit(): void {


    // sessionStorage.setItem('nonomina',res.nonomina);
    console.log(this.id);
    console.log(this.cont);
  }
  login(): void{
    
    // this.ServicioUsuarios.login(this.id,this.cont).subscribe((res:any)=>{
    //   if(res.ok==true){
    //     console.log(res);
        
    //   }
    // })
  }

  

}
