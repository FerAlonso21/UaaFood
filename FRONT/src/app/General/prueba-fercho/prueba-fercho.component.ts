import { Component, OnInit } from '@angular/core';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';

@Component({
  selector: 'app-prueba-fercho',
  templateUrl: './prueba-fercho.component.html',
  styleUrls: ['./prueba-fercho.component.css']
})
export class PruebaFerchoComponent implements OnInit {
  listado:string[]=[]
  constructor(private serviciocafetrias:CafeteriasService) { }

  ngOnInit(): void {
    this.serviciocafetrias.getCafeterias().subscribe((res:any)=>{
      //console.log("aqui es todo lo que regresa",res);
      if(res.ok==true){
     // console.log("lo que me interesa",res.info[0].data)
        for(let i of res.info[0].data[0].marvelData){
          this.listado.push(i.title);
          console.log(i.title);
        }
          
      }
    })

  }

}
