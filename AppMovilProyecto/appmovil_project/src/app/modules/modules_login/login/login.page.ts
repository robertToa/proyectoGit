import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Usuario} from "../../../interfaces/usuario";
import {AutenticacionService} from "../../../services/autenticacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:Usuario = <Usuario>{};

  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      ) { }

  ngOnInit() {
      if(this._autenticacionRest.getUsuarioLogeado() && this._autenticacionRest.getUsuarioLogeado()!=null){
          this.NavCtrl.navigateRoot("/main-navigation");
      }
  }

  login(){
    if(this.validar()===true){
        const logearse$ = this._autenticacionRest.logearse(this.usuario);
        logearse$.subscribe(
            (usuarios:Usuario[]) => {
                if(usuarios.length>0){
                    this._autenticacionRest.setusuarioLogeado(usuarios[0]);
                    this.NavCtrl.navigateRoot("/main-navigation");
                }else{
                    alert("Usuario Incorrecto");
                }
            },
            (error) => alert("No pudo logearse")
        )
    }else
      alert("Ingrese el usuario y la contraseña");
  }

  validar():boolean{
    if(this.usuario.nicknameUsuario && this.usuario.passwordUsuario){
      return true;
    }else
      return false;
  }
  registrer(){
      this.NavCtrl.navigateForward("/register")
  }
  forgetPassword(){
      this.NavCtrl.navigateForward("/ferget-password")
  }
}
