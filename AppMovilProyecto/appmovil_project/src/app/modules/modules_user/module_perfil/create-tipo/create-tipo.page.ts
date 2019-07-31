import { Component, OnInit } from '@angular/core';
import {TipoJean} from "../../../../interfaces/tipo-jean";
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {Usuario} from "../../../../interfaces/usuario";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {TipoJeanRestService} from "../../../../services/tipo-jean-rest.service";

@Component({
  selector: 'app-create-tipo',
  templateUrl: './create-tipo.page.html',
  styleUrls: ['./create-tipo.page.scss'],
})
export class CreateTipoPage implements OnInit {
    private usuario:Usuario = <Usuario>{};
  private tipoJean:TipoJean = <TipoJean>{};
  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _tipoJeanRest: TipoJeanRestService,
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
  }

    extraerUsuarioLogeado(){
        if(this._autenticacionRest.getUsuarioLogeado() && this._autenticacionRest.getUsuarioLogeado()!=null){
            try {
                this.usuario = this._autenticacionRest.getUsuarioLogeado();
            }catch (e) {
                this._autenticacionRest.setusuarioLogeado(null);
                this.NavCtrl.navigateRoot("/login");
            }
        }
    }

    crear(){
      this.tipoJean.idUsuario = this.usuario.id
        const tipoJean$ = this._tipoJeanRest.create(this.tipoJean);
        tipoJean$.subscribe(
            (obj)=>{
                alert("Tipo de Jean creado exitosamente!");
                this.NavCtrl.navigateRoot("/main-navigation/tab5")
            },
            (error) => {
              alert("No se pudo crear el tipo de Jean!");
            }
        )
    }

}
