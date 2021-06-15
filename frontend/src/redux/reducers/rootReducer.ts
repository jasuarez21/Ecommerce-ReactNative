import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import motosReducer from './motosReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  motos: motosReducer,
  user: usersReducer,
  cart: cartReducer
});

export default rootReducer;
