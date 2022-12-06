import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { LocalesService } from 'src/app/Servicios/locales.service';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';

@Component({
  selector: 'app-cafeteria',
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.css']
})
export class CafeteriaComponent implements OnInit {
  locales:any=[];
  cafeteria:any=[];
  id: any;
  
  constructor(private servicoCafeterias:CafeteriasService, private servicioLocales:LocalesService,private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      (params: Params)=>{
        this.id = params['ID']; 
        console.log(this.id);
      }
    )
    this.servicoCafeterias.getCafeteria(this.id).subscribe((res:any)=>{
      if(res.ok==true){
         
         this.cafeteria=res.info[0];
         console.log(this.cafeteria.Nombre);
        
      }
    })

    this.servicioLocales.localesXcafeteria(this.id).subscribe((res:any)=>{
      if(res.ok==true){
        console.log(res);
        for(let i of res.info){
         this.locales.push(i);
         //console.log(i);
        }
      }
    })

  }
  acceder(idlocal:any):void{
    this.route.navigate(['/local'],{queryParams:{ID:idlocal}});

  }
  

}
