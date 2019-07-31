import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {CabeceraVenta} from "../interfaces/cabecera-venta";

@Injectable({
  providedIn: 'root'
})
export class CabeceraVentaRestService {
  modelo: string ="/CabeceraVenta";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<CabeceraVenta[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <CabeceraVenta[]> r));
    }

    delete(id: number | string): Observable<CabeceraVenta> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <CabeceraVenta> r));
    }

    create(objeto:CabeceraVenta): Observable<CabeceraVenta> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <CabeceraVenta> r));
    }

    findOneById(id: number | string): Observable<CabeceraVenta> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <CabeceraVenta>r));
    }

    updateOneById(objeto:CabeceraVenta) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <CabeceraVenta> r));
    }
}
