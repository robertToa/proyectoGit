import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../interfaces/usuario";
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {CabeceraCompraRestService} from "../../../../services/cabecera-compra-rest.service";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {TipoJeanRestService} from "../../../../services/tipo-jean-rest.service";
import {TallaJeanRestService} from "../../../../services/talla-jean-rest.service";
import {CabeceraVenta} from "../../../../interfaces/cabecera-venta";
import {CabeceraCompra} from "../../../../interfaces/cabecera-compra";

@Component({
  selector: 'app-visualizar-ingre-egre',
  templateUrl: './visualizar-ingre-egre.page.html',
  styleUrls: ['./visualizar-ingre-egre.page.scss'],
})
export class VisualizarIngreEgrePage implements OnInit {
    usuario:Usuario = <Usuario>{};
    cantidadCompra:number = 0;
    cantidaVenta:number = 0;
    total:number = 0;
  constructor(
      private NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _compraRest: CabeceraCompraRestService,
      private readonly _ventaRest: CabeceraVentaRestService,
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
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
    cargarInformacionGeneral(){
        const compra$ = this._compraRest.findAll();
        compra$.subscribe(
            (objeto:CabeceraCompra[]) =>
            {
                objeto.forEach(item=>{
                  this.cantidadCompra += item.totalCompra;
                  this.total -=item.totalCompra;
                });
            }
        );
        const venta$ = this._ventaRest.findAll();
        venta$.subscribe(
            (objeto:CabeceraVenta[]) =>
            {
                objeto.forEach(item=>{
                    this.cantidaVenta += item.totalVenta;
                    this.total += item.totalVenta;
                });
            }
        );
    }

    doRefresh(event) {
        setTimeout(() => {
            this.extraerUsuarioLogeado();
            this.cargarInformacionGeneral();
            event.target.complete();
        }, 2000);
    }

}
