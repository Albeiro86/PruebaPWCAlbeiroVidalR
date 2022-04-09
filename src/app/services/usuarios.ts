import { LoginForm } from '../interfaces/login.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


const base_url= environment.base_url;


@Injectable ({
    providedIn: 'root'
})


export class UsuarioService {
    constructor (private http:HttpClient) {}


login (formData : LoginForm){

    return this.http.post(`${ base_url}/login`, formData);

}

}