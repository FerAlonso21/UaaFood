import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  id: any;

  constructor(private router: ActivatedRoute, private ServicioMenu:ProductosService) { }

  menu:any=[];

  ngOnInit(): void {
    
    this.router.queryParams.subscribe(
      (params: Params)=>{
        this.id = params['ID']; 
        console.log(this.id);
      }
    )

    this.ServicioMenu.productosXlocal(this.id).subscribe((res:any)=>{
      if(res.ok==true){
        
        for(let i of res.info[0]){
          this.menu.push(i);
          console.log(this.menu);
         }
      }
    })
  }

}
