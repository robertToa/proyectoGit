import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionDatosService {

  constructor() { }
    soloNumeros(texto){
        var regex_numeros = /^[0-9]+$/;
        if((regex_numeros).exec(texto)){
            return true
        }else{
            return false;
        }
    }
    soloLetras(texto){
        var regex_letras = /^[a-zA-Z ]+$/;
        if((regex_letras).exec(texto)){
            return true
        }else{
            return false;
        }
    }
    correoElectronico(texto){
        var regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if((regex_email).exec(texto)){
            return true
        }else{
            return false;
        }
    }
}
