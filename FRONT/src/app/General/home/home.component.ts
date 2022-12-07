import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cafeterias:any=[];
 
  constructor(private servicoCafeterias:CafeteriasService,private router:Router) { }

  ngOnInit(): void {
    
    this.servicoCafeterias.getCafeterias().subscribe((res:any)=>{
      if(res.ok==true){
        for(let i of res.info[0]){
            this.cafeterias.push(i);
            //console.log(i)
        }
      }
    })
  }

  acceder(id:any):void{
    this.router.navigate(['/cafeteria'],{queryParams:{ID:id}});

  }
}
