import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../interfaces/usuario";
import {Jean} from "../../../../interfaces/jean";
import {TipoJean} from "../../../../interfaces/tipo-jean";
import {TallaJean} from "../../../../interfaces/talla-jean";
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {DetalleVentaRestService} from "../../../../services/detalle-venta-rest.service";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {RaspberryRestService} from "../../../../services/raspberry-rest.service";
import {TipoJeanRestService} from "../../../../services/tipo-jean-rest.service";
import {TallaJeanRestService} from "../../../../services/talla-jean-rest.service";

@Component({
  selector: 'app-create-jean',
  templateUrl: './create-jean.page.html',
  styleUrls: ['./create-jean.page.scss'],
})
export class CreateJeanPage implements OnInit {
    private usuario:Usuario = <Usuario>{};
    private jeans:Jean = <Jean>{};
    private tiposJean:TipoJean[] = [];
    private tallasJean:TallaJean[] = [];

  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _jeanRest: JeanRestService,
      private readonly _tipoJeanRest: TipoJeanRestService,
      private readonly _tallaJeanRest: TallaJeanRestService,
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }

    cargarInformacionGeneral(){
        const objeto$ = this._tipoJeanRest.findAll();
        objeto$.subscribe(
            (objeto:TipoJean[]) => {
                this.tiposJean = objeto
            });
        const objeto1$ = this._tallaJeanRest.findAll();
        objeto1$.subscribe(
            (objeto:TallaJean[]) => {
                this.tallasJean = objeto
            });
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

    doRefresh(event) {
        setTimeout(() => {
            this.extraerUsuarioLogeado();
            this.cargarInformacionGeneral();
            event.target.complete();
        }, 2000);
    }

    crearJean(){
    if(this.validar()){
      this.jeans.idUsuario = this.usuario.id;
        this.jeans.stockJean = 0;
        const objeto$ = this._jeanRest.create(this.jeans);
        objeto$.subscribe(
            (objeto:Jean) => {
                alert("Jean creado exitosamente!");
                this.NavCtrl.navigateRoot("/main-navigation/tab5")
            },
            (error) => {
                alert("No se pudo crear el Jean!");
            });
    }else{
        alert("Inftormación incomplea para guardar!")
    }
  }
    validar(){
      if(this.jeans.nombreJean && this.jeans.idTallaJean && this.jeans.idTipoJean){
        return true;
      }else
        return false;
    }


}
