import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../interfaces/usuario";
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {TallaJean} from "../../../../interfaces/talla-jean";
import {TallaJeanRestService} from "../../../../services/talla-jean-rest.service";

@Component({
  selector: 'app-create-talla',
  templateUrl: './create-talla.page.html',
  styleUrls: ['./create-talla.page.scss'],
})
export class CreateTallaPage implements OnInit {
    private usuario:Usuario = <Usuario>{};
    private tallaJean:TallaJean = <TallaJean>{};
  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _tallaJeanRest: TallaJeanRestService,
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
        this.tallaJean.idUsuario = this.usuario.id
        const tallaJean$ = this._tallaJeanRest.create(this.tallaJean);
        tallaJean$.subscribe(
            (obj)=>{
                alert("Talla de Jean creado exitosamente!");
                this.NavCtrl.navigateRoot("/main-navigation/tab5")
            },
            (error) => {
                alert("No se pudo crear la talla del Jean!");
            }
        )
    }

}
