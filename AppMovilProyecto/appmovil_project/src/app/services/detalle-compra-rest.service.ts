import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {DetalleCompra} from "../interfaces/detalle-compra";

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraRestService {
  modelo: string ="/DetalleCompra";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    findAll(): Observable<DetalleCompra[]> {
        return  this._httpClient
            .get(environment.url + this.modelo)
            .pipe(map(r => <DetalleCompra[]> r));
    }

    delete(id: number | string): Observable<DetalleCompra> {
        return this._httpClient
            .delete(environment.url + this.modelo + `/${id}`)
            .pipe(map(r => <DetalleCompra> r));
    }

    create(objeto:DetalleCompra): Observable<DetalleCompra> {
        const url = environment.url + this.modelo;
        return this._httpClient
            .post(url, objeto)
            .pipe(map(r => <DetalleCompra> r));
    }

    findOneById(id: number | string): Observable<DetalleCompra> {
        const url = environment.url + this.modelo
            + '/' + id;
        return this._httpClient
            .get(url)
            .pipe(map(r => <DetalleCompra>r));
    }

    updateOneById(objeto:DetalleCompra) {
        const url = environment.url + this.modelo
            + '/' + objeto.id;
        return this._httpClient
            .put(url, objeto)
            .pipe(map(r => <DetalleCompra> r));
    }
}
