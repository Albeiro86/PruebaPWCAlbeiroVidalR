import { LoginForm } from '../interfaces/login.interface';
import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {tap} from 'rxjs/operators';

const base_url= environment.base_url;


@Injectable ({
    providedIn: 'root'
})


export class UsuarioService {
    constructor (private http:HttpClient) {}

    validarToken(){
        // pongo en true la opcion de diferencia por el momento, debido a que no he hecho la validacion de cmparacion del token
        const token= localStorage.getItem('token') || 'true';
    }


login (formData : LoginForm){

    return this.http.post(`${ base_url}/login`, formData)
    .pipe(
        tap((resp:any)=>{
            localStorage.setItem('token', resp.token)
            
            
        })
        
    );

}

}