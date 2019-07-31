import {TipoJean} from "./tipo-jean";
import {TallaJean} from "./talla-jean";
import {Jean} from "./jean";
import {CabeceraCompra} from "./cabecera-compra";
import {CabeceraVenta} from "./cabecera-venta";

export interface Usuario {
    id:number |String,
    nombreUsuario: String,
    apellidoUsuario: String,
    nicknameUsuario: string,
    passwordUsuario: String,
    emailUsuario: String,
    edadUsuario: number,
    tipoJean: TipoJean[],
    tallaJean: TallaJean[],
    Jean: Jean[],
    CabeceraCompra: CabeceraCompra[],
    CabeceraVenta: CabeceraVenta[],
}
