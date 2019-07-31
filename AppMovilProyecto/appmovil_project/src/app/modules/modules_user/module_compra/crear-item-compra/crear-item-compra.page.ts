import { Component, OnInit } from '@angular/core';
import {Jean} from "../../../../interfaces/jean";
import {Usuario} from "../../../../interfaces/usuario";
import {NavController} from "@ionic/angular";
import {AutenticacionService} from "../../../../services/autenticacion.service";
import {JeanRestService} from "../../../../services/jean-rest.service";
import {CabeceraCompra} from "../../../../interfaces/cabecera-compra";
import {DetalleCompra} from "../../../../interfaces/detalle-compra";
import {DetalleCompraRestService} from "../../../../services/detalle-compra-rest.service";
import {CabeceraCompraRestService} from "../../../../services/cabecera-compra-rest.service";

@Component({
  selector: 'app-crear-item-compra',
  templateUrl: './crear-item-compra.page.html',
  styleUrls: ['./crear-item-compra.page.scss'],
})
export class CrearItemCompraPage implements OnInit {

    private usuario:Usuario = <Usuario>{};
    private cabeceraCompra:CabeceraCompra = <CabeceraCompra>{};
    private jeans:Jean[] = [];
    private detalleCompra:DetalleCompra[] = [];

  constructor(
      public NavCtrl: NavController,
      private readonly _autenticacionRest: AutenticacionService,
      private readonly _cabeceraCompraRest: CabeceraCompraRestService,
      private readonly _detalleCompraRest: DetalleCompraRestService,
      private readonly _jeanRest: JeanRestService
  ) { }

  ngOnInit() {
      this.extraerUsuarioLogeado();
      this.cargarInformacionGeneral();
  }
    eliminarItem(){
        if(this.detalleCompra.length>0){
            this.detalleCompra.pop()
        }
    }

    agregarItem(){
        var detaVenta:DetalleCompra = <DetalleCompra>{};
        this.detalleCompra.push(detaVenta)
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
        this.cabeceraCompra = <CabeceraCompra>{};
        this.detalleCompra = [];
        this.cargarInformacionGeneral()
    }

    guardar(){
        if(this.validar()===true){
            const Fecha = new Date();
            this.cabeceraCompra.fechaCompra = Fecha;
            this.cabeceraCompra.idUsuario = this.usuario.id;
            this.obtenerTotalVenta();
            const cabeceraVender$ = this._cabeceraCompraRest.create(this.cabeceraCompra);
            cabeceraVender$.subscribe(
                (objeto:CabeceraCompra) => {
                  console.log(objeto);
                    if(objeto.id){
                        this.detalleCompra.forEach(item=>{
                            item.idCabeceraCompra = objeto.id;
                            const detalleVenta$ = this._detalleCompraRest.create(item);
                            detalleVenta$.subscribe(
                                (objetoDetalle:DetalleCompra)=>{
                                    var jeanUp = this.jeans.findIndex(l=> l.id == item.idJean)
                                    this.jeans[jeanUp].stockJean = this.jeans[jeanUp].stockJean + item.cantidadCompra;
                                    const jeanupdate$ = this._jeanRest.updateOneById(this.jeans[jeanUp]);
                                    jeanupdate$.subscribe((j)=>{},(error)=>{console.log(error)});
                                },
                                (error)=>{
                                    this.cabeceraCompra.totalCompra -= item.cantidadCompra*item.precioUnitarioCompra;
                                    alert("No se pudo guardar un item!")
                                }
                            );
                        });
                        this.cancelar();
                        this.NavCtrl.navigateRoot("/main-navigation/tab3");
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
        this.cabeceraCompra.totalCompra = 0;
        this.detalleCompra.forEach(item=>{
            this.cabeceraCompra.totalCompra += item.precioUnitarioCompra * item.cantidadCompra
        });
    }

    validar(){
        if(this.cabeceraCompra.nombreDistribuidor && this.cabeceraCompra.emailDistribuidor){
            return true;
        }else{
            return false;
        }
    }

}
