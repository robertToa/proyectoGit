import {Jean} from "./jean";
import {CabeceraVenta} from "./cabecera-venta";

export interface DetalleVenta {
    id:number |String,
    precioUnitarioVenta: number,
    cantidadVenta: number,
    idJean: number | String | Jean,
    idCabeceraVenta: number | String | CabeceraVenta,
}
