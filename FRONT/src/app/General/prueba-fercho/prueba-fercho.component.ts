import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CafeteriasService } from 'src/app/Servicios/cafeterias.service';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { SocketService } from 'src/app/Servicios/socket.service';

@Component({
  selector: 'app-prueba-fercho',
  templateUrl: './prueba-fercho.component.html',
  styleUrls: ['./prueba-fercho.component.css']
})
export class PruebaFerchoComponent implements OnInit {
  listado:any=[];
  bandera:boolean=true;
  room:any;
  info:string='';
  constructor(private router:ActivatedRoute,private servicioPedidos:PedidosService,private coockieService:CookieService,private socketService:SocketService) { 
    this.socketService.outEven.subscribe(res => {
      this.info=res;
      
    })
  }

  ngOnInit(): void {
    this.room= this.router.snapshot.paramMap.get('room');
    this.coockieService.set('room',this.room);
    console.log(this.room);
  //  this.servicioPedidos.getPedidosXlocal(2).subscribe((res:any)=>{
  //   this.listado=res.info;
  //   console.log(res)
  //  })

  }

  funcion1(){
    console.log("si NETREEE");
    this.socketService.emitEvent("enviando datooos")
  }

}
