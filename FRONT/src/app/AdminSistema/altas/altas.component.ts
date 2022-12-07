import { Component, OnInit } from '@angular/core';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { LocalesService } from 'src/app/Servicios/locales.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  cafeterias:any;
  locales:any;
  anadir:number=0;
  constructor(private servicioCafeterias:CafeteriasService,private servicioLocales:LocalesService) { }

  ngOnInit(): void {



    this.servicioCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        this.cafeterias=res.info[0]
        console.log(this.cafeterias)
      }
    })
  }

  addCafeteria(){
    this.anadir=1;
  }

  addLocal(){
    this.anadir=2;
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
