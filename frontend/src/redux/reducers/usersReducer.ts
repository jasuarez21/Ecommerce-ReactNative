import { MotoActions } from './../../models/actions';
import {User} from '../../models/user'

function usersReducer(user: Array<User> = [], action: MotoActions) {
  switch (action.type) {
    case 'LOG_IN':
      return action.data;
      case 'LOG_OUT':
      return action.data;
      case 'SIGN_UP':
      return action.data;
      case 'DELETE_ACCOUNT':
      return [];
    default:
      return user;
  }
}
export default usersReducer;