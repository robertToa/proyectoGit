import {TipoJean} from "./tipo-jean";
import {TallaJean} from "./talla-jean";
import {Usuario} from "./usuario";
import {DetalleVenta} from "./detalle-venta";
import {DetalleCompra} from "./detalle-compra";

export interface Jean {
    id:number |String,
    nombreJean: String,
    stockJean: number,
    idTipoJean: number | String | TipoJean,
    idTallaJean: number | String | TallaJean,
    idUsuario: number | String | Usuario,
    DetalleVenta: DetalleVenta[],
    DetalleCompra: DetalleCompra[],
}
