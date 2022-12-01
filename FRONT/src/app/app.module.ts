import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Servicios



//Fin Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './General/login/login.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { HomeComponent } from './General/home/home.component';
import { FooterComponent } from './General/footer/footer.component';
import { RegistroComponent } from './General/registro/registro.component';
//hola
import {HttpClientModule} from '@angular/common/http'
//hola charly


// comentario charly
//comentario charly2
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
