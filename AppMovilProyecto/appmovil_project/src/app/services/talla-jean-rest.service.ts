import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {TallaJean} from "../interfaces/talla-jean";

@Injectable({
  providedIn: 'root'
})
export class TallaJeanRestService {
  modelo: string ="/TallJean";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }
    findAll(): Observable<TallaJean[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <TallaJean[]> r));
    }

    delete(id: number | string): Observable<TallaJean> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <TallaJean> r));
    }

    create(objeto:TallaJean): Observable<TallaJean> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <TallaJean> r));
    }

    findOneById(id: number | string): Observable<TallaJean> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <TallaJean>r));
    }

    updateOneById(objeto:TallaJean) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <TallaJean> r));
    }
}
