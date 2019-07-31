import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {CabeceraVentaRestService} from "../../../../services/cabecera-venta-rest.service";
import {Usuario} from "../../../../interfaces/usuario";
import {DetalleVentaRestService} from "../../../../services/detalle-venta-rest.service";
import {CabeceraVenta} from "../../../../interfaces/cabecera-venta";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {DetalleVenta} from "../../../../interfaces/detalle-venta";
import {Jean} from "../../../../interfaces/jean";
import {RaspberryRestService} from "../../../../services/raspberry-rest.service";

@Component({
  selector: 'app-crear-item-venta',
  templateUrl: './crear-item-venta.page.html',
  styleUrls: ['./crear-item-venta.page.scss'],
})
export class CrearItemVentaPage implements OnInit {
  private usuario:Usuario = <Usuario>{};
  private cabeceraDetalle:CabeceraVenta = <CabeceraVenta>{};
  private jeans:Jean[] = [];
  private detalleVenta:DetalleVenta[] = [];

  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _cabeceraVentaRest: CabeceraVentaRestService,
      private readonly _detalleVentaRest: DetalleVentaRestService,
      private readonly _jeanRest: JeanRestService,
      private readonly _raspberryRest: RaspberryRestService
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }

  eliminarItem(){
    if(this.detalleVenta.length>0){
      this.detalleVenta.pop()
    }
  }

  agregarItem(){
      var detaVenta:DetalleVenta = <DetalleVenta>{};
      this.detalleVenta.push(detaVenta)
  }

    cargarInformacionGeneral(){
        const objeto$ = this._jeanRest.findAll();
        objeto$.subscribe(
            (objeto:Jean[]) => {
                this.jeans = objeto
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

    cancelar(){
      this.usuario = <Usuario>{};
      this.cabeceraDetalle = <CabeceraVenta>{};
      this.detalleVenta = [];
      this.cargarInformacionGeneral()
    }

    guardar(){
      if(this.validar()===true){
          const Fecha = new Date();
          this.cabeceraDetalle.fechaVenta = Fecha;
          this.cabeceraDetalle.idUsuario = this.usuario.id;
          this.obtenerTotalVenta();
          const cabeceraVender$ = this._cabeceraVentaRest.create(this.cabeceraDetalle);
          cabeceraVender$.subscribe(
              (objeto:CabeceraVenta) => {
                  if(objeto.id){
                      const encender$ = this._raspberryRest.encenderLed();
                      encender$.subscribe((j)=>{},(error)=>{console.log(error)});
                      this.detalleVenta.forEach(item=>{
                          item.idCabeceraVenta = objeto.id;
                          const detalleVenta$ = this._detalleVentaRest.create(item);
                          detalleVenta$.subscribe(
                              (objetoDetalle:DetalleVenta)=>{
                                  var jeanUp = this.jeans.findIndex(l=> l.id == item.idJean)
                                  this.jeans[jeanUp].stockJean = this.jeans[jeanUp].stockJean - item.cantidadVenta;
                                  const jeanupdate$ = this._jeanRest.updateOneById(this.jeans[jeanUp]);

                                  jeanupdate$.subscribe((j)=>{},(error)=>{console.log(error)});
                              },
                              (error)=>{
                                  this.cabeceraDetalle.totalVenta -= item.cantidadVenta*item.precioUnitarioVenta;
                                  alert("No se pudo guardar un item!")
                              }
                          );
                      });
                      this.cancelar();
                      setTimeout(() =>
                          {
                              const apagar$ = this._raspberryRest.apagarLed();
                              apagar$.subscribe((j)=>{},(error)=>{console.log(error)});
                          },
                          2000);
                      this.NavCtrl.navigateRoot("/main-navigation/tab2");
                  }else{
                      alert("No se guardó la información!")
                  }
              },
              (error) => {
                  console.log(error)
                  alert("No se pudo guardar la información!")
              }
          );
      }else{
          alert("Información incompleta para guardar!")
      }
    }

    obtenerTotalVenta(){
      this.cabeceraDetalle.totalVenta = 0;
      this.detalleVenta.forEach(item=>{
        this.cabeceraDetalle.totalVenta += item.precioUnitarioVenta * item.cantidadVenta
      });
    }

    validar(){
      if(this.cabeceraDetalle.nombreComprador && this.cabeceraDetalle.emailComprador){
          return true;
      }else{
          return false;
      }
    }

}

//LED 4 con la resistencia y 5 con el normal