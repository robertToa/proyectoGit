import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {TipoJean} from "../interfaces/tipo-jean";

@Injectable({
  providedIn: 'root'
})
export class TipoJeanRestService {
  modelo: string ="/TipoJean";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<TipoJean[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <TipoJean[]> r));
    }

    delete(id: number | string): Observable<TipoJean> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <TipoJean> r));
    }

    create(objeto:TipoJean): Observable<TipoJean> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <TipoJean> r));
    }

    findOneById(id: number | string): Observable<TipoJean> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <TipoJean>r));
    }

    updateOneById(objeto:TipoJean) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <TipoJean> r));
    }
}
