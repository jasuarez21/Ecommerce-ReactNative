import { Moto } from "./moto";
import { User } from "./user";

export type MotoActions = 
    | {type: 'GET_MOTOS'; data: Array<Moto>}
    | {type: 'ADD_TO_CART'; moto: Moto}
    | {type: 'LOAD_CART';}
    | {type: 'DELETE_CART'; moto: Moto}
    | {type: 'LOG_IN'; data: User}
    | {type: 'LOG_OUT'; data: User}
    | {type: 'SIGN_UP'; data: User}
    | {type: 'UPDATE_CART'}
    | {type: 'DELETE_ACCOUNT'}
    | {type: 'ERROR'}