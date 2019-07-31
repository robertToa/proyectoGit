import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Usuario} from "../../../../interfaces/usuario";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {Jean} from "../../../../interfaces/jean";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {CabeceraVenta} from "../../../../interfaces/cabecera-venta";

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.page.html',
  styleUrls: ['./lista-ventas.page.scss'],
})
export class ListaVentasPage implements OnInit {
    private usuario:Usuario = <Usuario>{};
    private ventas:CabeceraVenta[] = [];
    constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _cabeceraVentaRest: CabeceraVentaRestService,
    ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }

  floatingButton(){
      this.NavCtrl.navigateForward("/main-navigation/crear-venta")
  }

    cargarInformacionGeneral(){
        const objeto$ = this._cabeceraVentaRest.findAll();
        objeto$.subscribe(
            (objeto:CabeceraVenta[]) => {
                this.ventas = objeto
            },
            (error) => alert("No se cargo la información!")
        );
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

}

