import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {CabeceraCompra} from "../interfaces/cabecera-compra";

@Injectable({
  providedIn: 'root'
})
export class CabeceraCompraRestService {
  modelo: string ="/CabeceraCompra";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<CabeceraCompra[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <CabeceraCompra[]> r));
    }

    delete(id: number | string): Observable<CabeceraCompra> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <CabeceraCompra> r));
    }

    create(objeto:CabeceraCompra): Observable<CabeceraCompra> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <CabeceraCompra> r));
    }

    findOneById(id: number | string): Observable<CabeceraCompra> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <CabeceraCompra>r));
    }

    updateOneById(objeto:CabeceraCompra) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <CabeceraCompra> r));
    }
}
