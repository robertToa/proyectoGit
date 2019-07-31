import {DetalleVenta} from "./detalle-venta";
import {Usuario} from "./usuario";

export interface CabeceraVenta {
    id:number |String,
    nombreComprador: String,
    direccionComprador: String,
    telefonoComprador: String,
    emailComprador: String
    fechaVenta: Date,
    totalVenta: number,
    DetalleVenta: DetalleVenta[],
    idUsuario: number | String | Usuario
}
