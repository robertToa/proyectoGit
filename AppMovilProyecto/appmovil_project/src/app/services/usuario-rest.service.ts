import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../interfaces/usuario";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {
    modelo: string ="/Usuario";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<Usuario[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <Usuario[]> r));
    }

    delete(id: number | String): Observable<Usuario> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <Usuario> r));
    }

    create(objeto:Usuario): Observable<Usuario> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <Usuario> r));
    }
    findByUsername(username:string): Observable<Usuario[]> {
        const url = environment.url + this.modelo+'/buscarUsername';
        const objeto ={
            username: username
        };
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <Usuario[]> r));
    }

    recuperarPassByUsername(username:string): Observable<Usuario[]> {
        const url = environment.url + this.modelo+'/RecuperarContra';
        const objeto ={
            username: username
        };
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <Usuario[]> r));
    }

    findOneById(id: number | String): Observable<Usuario> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <Usuario> r));
    }

    updateOneById(objeto:Usuario) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <Usuario> r));
    }
}
