import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//DE AQUI
import { CookieService } from 'ngx-cookie-service';

//A, AQUI NO LE PONGAS NADA CHARLY
//Servicios

//aqui le voy a poner cosa pero no quiero hacerle push a esto

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
import { AltaProductosComponent } from './AdminLocal/alta-productos/alta-productos.component';
import { AltasComponent } from './AdminSistema/altas/altas.component';

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
    LocalComponent,
    AltaProductosComponent,
    AltasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
