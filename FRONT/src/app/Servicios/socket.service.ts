import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket{
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor( private cookieService:CookieService) {
    super({
      url: 'http://localhost:3000',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        },
      }
    })
    this.listen();
   }
   listen = () => {
    this.ioSocket.on('evento', (res: any) => this.outEven.emit(res));   

  }
  emitEvent = (payload = {}) => {
    this.ioSocket.emit('evento', payload) 

  }
}
/** 
   
19 grados y  23

export class SocketwebService extends Socket{
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor(private coockieService:CookieService) {
    super({
      url: 'http://localhost:3000',
      options: {
        query: {
          nameRoom: coockieService.get('room')
        },
      }
    })
  
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('evento', (res: any) => this.outEven.emit(res));   

  }
    emitEvent = (payload = {}) => {
    this.ioSocket.emit('evento', payload)
  }
}

 */
