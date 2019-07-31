import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jean} from "../interfaces/jean";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RaspberryRestService {
    modelo: string ="http://192.168.1.101:1337/";
  constructor(
      private readonly _httpClient: HttpClient,
  ) { }

    encenderLed(): Observable<String> {
        return  this._httpClient
            .get(this.modelo+'encender')
            .pipe(map(r => <String> r));
    }

    apagarLed(): Observable<String> {
        return  this._httpClient
            .get(this.modelo+'apagar')
            .pipe(map(r => <String> r));
    }
}
