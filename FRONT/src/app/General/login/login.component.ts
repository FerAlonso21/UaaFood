import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(private ServicioUsuarios:UsuariosService, private fb:FormBuilder) { }

  ngOnInit(): void {
  this.formLogin = this.fb.group({
    id:['',Validators.required],
    password:['',Validators.required]
  })
  }

  login(): void{
    console.log(this.formLogin.value);
    console.log(this.formLogin.get('id')?.value);
    this.ServicioUsuarios.login(this.formLogin.value.id,this.formLogin.value.password).subscribe((res:any)=>{
      console.log(res);
      if(res.ok==true){
        console.log(res);
        
      }
    })
  }

}
