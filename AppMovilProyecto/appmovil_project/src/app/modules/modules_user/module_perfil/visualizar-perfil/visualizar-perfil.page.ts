import {Component, OnInit, ViewChild} from '@angular/core';
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {Usuario} from "../../../../interfaces/usuario";
import {NavController} from "@ionic/angular";
import {CabeceraCompraRestService} from "../../../../services/cabecera-compra-rest.service";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {TipoJeanRestService} from "../../../../services/tipo-jean-rest.service";
import {TallaJeanRestService} from "../../../../services/talla-jean-rest.service";
import {CabeceraVenta} from "../../../../interfaces/cabecera-venta";

@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.page.html',
  styleUrls: ['./visualizar-perfil.page.scss'],
})

export class VisualizarPerfilPage implements OnInit {
  usuario:Usuario = <Usuario>{};
  cantidadJeans:number = 0;
  cantidadTipoJean:number = 0;
  cantidadTallaJean:number = 0;
  cantidadCompra:number = 0;
  cantidaVenta:number = 0;

  constructor(
      private NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _compraRest: CabeceraCompraRestService,
      private readonly _ventaRest: CabeceraVentaRestService,
      private readonly _jeanRest: JeanRestService,
      private readonly _tipoJeanRest: TipoJeanRestService,
      private readonly _tallaJeanRest: TallaJeanRestService,
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
      const jeans$ = this._jeanRest.findAll();
      jeans$.subscribe(
          (objeto:object[]) =>
          {
            this.cantidadJeans = objeto.length;
          }
      );
      const talla$ = this._tallaJeanRest.findAll();
      talla$.subscribe(
          (objeto:object[]) =>
          {
              this.cantidadTallaJean = objeto.length;
          }
      );
      const tipo$ = this._tipoJeanRest.findAll();
      tipo$.subscribe(
          (objeto:object[]) =>
          {
              this.cantidadTipoJean = objeto.length;
          }
      );
      const compra$ = this._compraRest.findAll();
      compra$.subscribe(
          (objeto:object[]) =>
          {
              this.cantidadCompra = objeto.length;
          }
      );
      const venta$ = this._ventaRest.findAll();
      venta$.subscribe(
          (objeto:CabeceraVenta[]) =>
          {
              this.cantidaVenta = objeto.length;
          }
      );
      /*this.cargarCantidadObjeto(this._jeanRest,this.cantidadJeans);
      this.cargarCantidadObjeto(this._tallaJeanRest,this.cantidadTallaJean);
      this.cargarCantidadObjeto(this._tipoJeanRest,this.cantidadTipoJean);
      this.cargarCantidadObjeto(this._compraRest,this.cantidadCompra);
      this.cargarCantidadObjeto(this._ventaRest,this.cantidaVenta);*/
  }

  /*cargarCantidadObjeto(service, cantidad){
    try{
        const objeto$ = service.findAll();
        objeto$.subscribe(
            (objeto:object[]) =>
            {
                cantidad = objeto.length;
            }
        );
    }catch (e) {

    }
  }*/
    doRefresh(event) {
        setTimeout(() => {
            this.extraerUsuarioLogeado();
            this.cargarInformacionGeneral();
            event.target.complete();
        }, 2000);
    }

    salir(){
        this._autenticacionRest.setusuarioLogeado(null);
        this.NavCtrl.navigateRoot("/login");
    }
    abrirTalla(){
        this.NavCtrl.navigateRoot("/main-navigation/crear-talla");
    }
    abrirTipo(){
        this.NavCtrl.navigateRoot("/main-navigation/crear-tipo");
    }
    abrirJean(){
        console.log("ingresssooo Jean")
        this.NavCtrl.navigateRoot("/main-navigation/crear-jean");
    }
}
