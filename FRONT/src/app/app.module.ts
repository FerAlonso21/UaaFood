import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//DE AQUI


//A, AQUI NO LE PONGAS NADA CHARLY
//Servicios



//Fin Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './General/login/login.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { HomeComponent } from './General/home/home.component';
import { FooterComponent } from './General/footer/footer.component';
import { RegistroComponent } from './General/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { PruebaFerchoComponent } from './General/prueba-fercho/prueba-fercho.component';
import { LocalComponent } from './General/local/local.component'
import { CafeteriaComponent } from './General/cafeteria/cafeteria.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegistroComponent,
    PruebaFerchoComponent,
    CafeteriaComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
