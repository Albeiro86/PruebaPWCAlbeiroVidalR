/* ******Developed by******
***Albeiro Vidal Rojas** */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuarios';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public formSubmitted= false;
  public loginForm = this.fb.group({
    nombre:['test', Validators.required],
    password:['12345', Validators.required],
  })

  constructor(private router:Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
    ) { }

    // utilizo swit alert 2 libreria para mostrar la ventana de laerta para el error

  login () {
    this.usuarioService.login(this.loginForm.value)
    .subscribe(resp=>{
      console.log(resp)
      this.router.navigateByUrl('/');
    },(err)=>{
      Swal.fire('Error', err.error.msg, 'error');
      
    })
    
   
  }
}
