import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Jean} from "../../../../interfaces/jean";
import {CabeceraVenta} from "../../../../interfaces/cabecera-venta";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {Usuario} from "../../../../interfaces/usuario";
import {NavController} from "@ionic/angular";
import {DetalleVenta} from "../../../../interfaces/detalle-venta";

@Component({
  selector: 'app-visualizar-item-stock',
  templateUrl: './visualizar-item-stock.page.html',
  styleUrls: ['./visualizar-item-stock.page.scss'],
})
export class VisualizarItemStockPage implements OnInit {
  private jean:Jean = <Jean>{};
    private usuario:Usuario = <Usuario>{};
  private ventas:CabeceraVenta[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _cabeceraVentaRest: CabeceraVentaRestService,
  ) {
      this.route.queryParams.subscribe(params => {
          if (params && params.special) {
              this.jean = JSON.parse(params.special);
          }
      });
  }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }

    cargarInformacionGeneral(){
        const objeto$ = this._cabeceraVentaRest.findAll();
        objeto$.subscribe(
            (objeto:CabeceraVenta[]) => {
                var resultad = objeto.filter(l=>{
                    var detalleVen:DetalleVenta[] = l.DetalleVenta;
                    if(detalleVen.find(p=>p.idJean == this.jean.id))
                        return l;
                });
                this.ventas = resultad
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