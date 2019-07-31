import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../interfaces/usuario";
import {UsuarioRestService} from "../../../services/usuario-rest.service";
import {NavController} from "@ionic/angular";
import {ValidacionDatosService} from "../../../services/validacion-datos.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario:Usuario = <Usuario>{};
  constructor(
      private readonly _usuarioRest:UsuarioRestService,
      public NavCtrl: NavController,
      public _validacionService: ValidacionDatosService
  ) { }

  ngOnInit() {

  }

  registrarse(){
    if(this.validar()===true){
        const consumidor$ = this._usuarioRest.findByUsername(this.usuario.nicknameUsuario);
        consumidor$.subscribe(
            (usuarios:Usuario[]) => {
                if(usuarios.length>0){
                    alert("El usuario ya existe");
                }else{
                    const persona$ = this._usuarioRest.create(this.usuario);
                    persona$.subscribe(
                        (persona) => {
                            alert("Registrado correctamente, usuario:"+this.usuario.nicknameUsuario);
                            this.NavCtrl.navigateRoot("/login")
                        },
                        (error) => {
                            console.log(this.usuario);
                            console.log(error);
                            alert("No se pudo registrar el usuario")
                        }
                    )
                }
            }
        )
    }else{
      alert("Ingrese toda la informacion!");
    }
  }

  validar():boolean{
      var mensajeerror="";
      if(this.usuario.nombreUsuario===undefined || !this._validacionService.soloLetras(this.usuario.nombreUsuario))
          mensajeerror += "Campo nombre Incorrecto";
      if(this.usuario.apellidoUsuario===undefined || !this._validacionService.soloLetras(this.usuario.apellidoUsuario))
          mensajeerror += "Campo apellido Incorrecto";
      if(this.usuario.edadUsuario===undefined)
          mensajeerror += "Campo Edad no ingresado";
      if(this.usuario.edadUsuario<=0 || this.usuario.edadUsuario>=120)
          mensajeerror += "Edad incorrecta, fuera del intervalo [1-120]";
      if(this.usuario.emailUsuario===undefined || !this._validacionService.correoElectronico(this.usuario.emailUsuario))
          mensajeerror += "Email incorrecto";
      if(this.usuario.nicknameUsuario===undefined)
          mensajeerror += "Campo Username no ingresado";
      if(this.usuario.passwordUsuario===undefined)
          mensajeerror += "Campo password no ingresado";

      if(mensajeerror!=""){
          alert(mensajeerror)
          return false;
      }else{
          return true;
      }
  }

}
