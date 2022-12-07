import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  
  constructor(private ServicioUsuarios:UsuariosService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('idl','1');
  this.formLogin = this.fb.group({
    id:['',Validators.required],
    password:['',Validators.required]
  })
  }

  login(): void{
    
    console.log(this.formLogin.value);
    console.log(this.formLogin.get('id')?.value);
    this.ServicioUsuarios.login(this.formLogin.value.id,this.formLogin.value.password).subscribe(async (res:any)=>{
      if(res.ok==true){
        console.log(res.tipo);
        sessionStorage.setItem('id',this.formLogin.get('id')?.value);
        sessionStorage.setItem('nombre',res.usuario);
        sessionStorage.setItem('token',res.accesToken);
        sessionStorage.setItem('tipo',res.tipo);
        this.router.navigate(['/','home']);
        location.assign('/home');
      }
    })
  }

}
