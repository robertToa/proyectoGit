import {Jean} from "./jean";
import {CabeceraCompra} from "./cabecera-compra";

export interface DetalleCompra {
    id:number |String,
    precioUnitarioCompra: number,
    cantidadCompra: number,
    idJean: number | String | Jean,
    idCabeceraCompra: number | String | CabeceraCompra,
}
