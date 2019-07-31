import { Injectable } from '@angular/core';
import {AutenticacionService} from "../services/autenticacion.service";
import {CanActivate, Router} from "@angular/router";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuardService implements CanActivate {

  constructor(
      private readonly _autenticacionUsuario: AutenticacionService,
      private readonly _route: Router,
      public NavCtrl: NavController,
  ) { }

    canActivate(): boolean {
        if(this._autenticacionUsuario.getUsuarioLogeado() && this._autenticacionUsuario.getUsuarioLogeado()!=null){
            return true;
        }else{
            this.NavCtrl.navigateRoot("/login");
            return false;
        }
    }
}
