import { Component, OnInit } from '@angular/core';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cafeterias:string[]=[]
 
  constructor(private servicoCafeterias:CafeteriasService) { }

  ngOnInit(): void {
    this.servicoCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        for(let i of res.info){
            this.cafeterias.push(i.Nombre);
            console.log(i.Nombre)
        }
      }
    })
  }
}
