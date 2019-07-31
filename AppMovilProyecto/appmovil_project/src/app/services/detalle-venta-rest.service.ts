import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {DetalleVenta} from "../interfaces/detalle-venta";

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaRestService {
  modelo: string ="/DetalleVenta";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<DetalleVenta[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <DetalleVenta[]> r));
    }

    delete(id: number | string): Observable<DetalleVenta> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <DetalleVenta> r));
    }

    create(objeto:DetalleVenta): Observable<DetalleVenta> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <DetalleVenta> r));
    }

    findOneById(id: number | string): Observable<DetalleVenta> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <DetalleVenta>r));
    }

    updateOneById(objeto:DetalleVenta) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <DetalleVenta> r));
    }
}
