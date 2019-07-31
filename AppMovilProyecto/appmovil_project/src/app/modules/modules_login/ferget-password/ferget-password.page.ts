import { Component, OnInit } from '@angular/core';
import {UsuarioRestService} from "../../../services/usuario-rest.service";
import {NavController} from "@ionic/angular";
import {Usuario} from "../../../interfaces/usuario";
import {ValidacionDatosService} from "../../../services/validacion-datos.service";

@Component({
  selector: 'app-ferget-password',
  templateUrl: './ferget-password.page.html',
  styleUrls: ['./ferget-password.page.scss'],
})
export class FergetPasswordPage implements OnInit {
    usuario:Usuario = <Usuario>{};
  constructor(
      private readonly _usuarioRest:UsuarioRestService,
      public NavCtrl: NavController,
      public _validacionService: ValidacionDatosService
  ) { }

  ngOnInit() {
  }

  recuperarContrasenia(){
      if(this.validar()===true){
          const usuario$ = this._usuarioRest.recuperarPassByUsername(this.usuario.nicknameUsuario);
          usuario$.subscribe(
              (usuarios:Usuario[]) => {
                  if(usuarios.length>0){
                      alert("Se envío la contraseña a su correo electrónico!");
                      this.NavCtrl.navigateRoot("/login");
                  }else{
                      alert("No existe el usuario con ese username");
                  }
              },
              (error) => { alert("No existe el usuario con ese username"); }
          )
      }else{
          alert("Ingrese el username del Usuario");
      }
  }
    validar():boolean{
        var mensajeerror="";
        if(this.usuario.emailUsuario===undefined || !this._validacionService.correoElectronico(this.usuario.emailUsuario))
            mensajeerror += "Email incorrecto";
        if(mensajeerror!=""){
            alert(mensajeerror)
            return false;
        }else{
            return true;
        }
    }
}
