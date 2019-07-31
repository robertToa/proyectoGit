import {Usuario} from "./usuario";
import {Jean} from "./jean";

export interface TipoJean {
    id:number |String,
    tipoJean: String,
    idUsuario: number | String | Usuario,
    Jean: Jean[]
}
