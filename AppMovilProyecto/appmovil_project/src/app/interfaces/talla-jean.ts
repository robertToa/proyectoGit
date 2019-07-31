import {Usuario} from "./usuario";
import {Jean} from "./jean";

export interface TallaJean {
    id:number |String,
    tallaJean: String,
    idUsuario: number | String | Usuario,
    Jean: Jean[],
}
