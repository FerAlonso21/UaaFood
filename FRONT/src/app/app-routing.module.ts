import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CafeteriaComponent } from './General/cafeteria/cafeteria.component';
import { HomeComponent } from './General/home/home.component';
import { LocalComponent } from './General/local/local.component';
import { LoginComponent } from './General/login/login.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { RegistroComponent } from './General/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  //CHARLY AQUI DEJAME ESTAS 3 LINEAS EN BLANCO PARA YO PONER COSAS



  //
  {path: 'cafeteria', component: CafeteriaComponent},
  {path: 'local', component: LocalComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
