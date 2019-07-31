import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {Usuario} from "../../../../interfaces/usuario";
import {CabeceraCompra} from "../../../../interfaces/cabecera-compra";
import {CabeceraCompraRestService} from "../../../../services/cabecera-compra-rest.service";

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {
    private usuario:Usuario = <Usuario>{};
    private compras:CabeceraCompra[] = [];
  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _cabeceraCompraRest: CabeceraCompraRestService,
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }
    floatingButton(){
        this.NavCtrl.navigateForward("/main-navigation/crear-compra")
    }

    cargarInformacionGeneral(){
        const objeto$ = this._cabeceraCompraRest.findAll();
        objeto$.subscribe(
            (objeto:CabeceraCompra[]) => {
                this.compras = objeto
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
