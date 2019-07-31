import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Jean} from "../interfaces/jean";

@Injectable({
  providedIn: 'root'
})
export class JeanRestService {
  modelo: string ="/Jean";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<Jean[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <Jean[]> r));
    }

    delete(id: number | string): Observable<Jean> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <Jean> r));
    }

    create(objeto:Jean): Observable<Jean> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <Jean> r));
    }

    findOneById(id: number | string): Observable<Jean> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <Jean>r));
    }

    updateOneById(objeto:Jean) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        var updateJean:Jean = <Jean>{};
        updateJean.nombreJean = objeto.nombreJean;
        updateJean.stockJean = objeto.stockJean;
        return this._httpClient
            .put(url, updateJean)
            .pipe(map(r => <Jean> r));
    }
}
