import { Component, OnInit } from '@angular/core';
import {forEach} from "@angular-devkit/schematics";
import {NavController} from "@ionic/angular";
import {NavigationExtras} from "@angular/router";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {Usuario} from "../../../../interfaces/usuario";
import {Jean} from "../../../../interfaces/jean";
import {AutenticacionService} from "../../../../services/autenticacion.service";

@Component({
  selector: 'app-lista-stock',
  templateUrl: './lista-stock.page.html',
  styleUrls: ['./lista-stock.page.scss'],
})
export class ListaStockPage implements OnInit {
    usuario:Usuario = <Usuario>{};
  jeans:Jean[] = [];

  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _listaStockRestService: JeanRestService,
      ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }

  visualizarItemStock(item:Jean){
      let navigationExtras: NavigationExtras = {
          queryParams: {
              special: JSON.stringify(item)
          }
      };
      this.NavCtrl.navigateForward("/main-navigation/visualizar-stock",navigationExtras)
  }
    cargarInformacionGeneral(){
        const listaStock$ = this._listaStockRestService.findAll();
        listaStock$.subscribe(
            (jeans:Jean[]) => {
                this.jeans = jeans
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
