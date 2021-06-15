import { MotoActions } from './../../models/actions';
import {Moto} from '../../models/moto'

function motosReducer(motos: Array<Moto> = [], action: MotoActions) {
  if(action.type === 'GET_MOTOS'){
    return action.data;
  } else {
    return motos;
  }
}
export default motosReducer;
