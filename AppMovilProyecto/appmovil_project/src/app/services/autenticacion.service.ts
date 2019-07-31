import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/usuario";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  nombreModelo="/Usuario/login";
  constructor(
      private readonly _httpClient: HttpClient
  ) { }

    logearse(usuario:Usuario):Observable<Usuario[]>{
        const Objeto ={
            username: usuario.nicknameUsuario,
            password: usuario.passwordUsuario
        }
        const usuarios$ = this._httpClient
            .post(environment.url + this.nombreModelo,Objeto)
            .pipe(map(u => <Usuario[]> u));

        return usuarios$;
    }

    setusuarioLogeado(user:Usuario){
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getUsuarioLogeado():Usuario{
        const usuario:Usuario =  JSON.parse(localStorage.getItem('currentUser'));
        return usuario;
    }
}
