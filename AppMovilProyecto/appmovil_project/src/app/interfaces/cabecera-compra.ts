import {DetalleCompra} from "./detalle-compra";
import {Usuario} from "./usuario";

export interface CabeceraCompra {
    id:number |String,
    nombreDistribuidor: String,
    direccionDistribuidor: String,
    telefonoDistribuidor: String,
    emailDistribuidor: String,
    fechaCompra: Date,
    totalCompra: number,
    DetalleCompra: DetalleCompra[];
    idUsuario: number| String | Usuario;
}
