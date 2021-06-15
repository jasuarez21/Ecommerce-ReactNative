import { MotoActions } from './../../models/actions';
import {Moto} from '../../models/moto'
import actionTypes from '../actions/actionTypes';

function cartReducer(cart : Array<Moto> = [], action: MotoActions) {
  switch (action.type) {
  case 'ADD_TO_CART':
    const itemIndex = cart
    .findIndex((moto) => action.moto._id === moto._id);

  if (itemIndex > -1) {
    cart[itemIndex] = {
      ...cart[itemIndex],
      quantity: cart[itemIndex].quantity + 1 || 1
    };
    return [...cart];
  }
  return [
    ...cart,
    {
      ...action.moto,
      quantity: 1
    }
  ];
    case 'DELETE_CART':
      const itemIndexDelete = cart
      .findIndex((moto) => action.moto._id === moto._id);
  
    if (cart[itemIndexDelete].quantity > 1) {
      cart[itemIndexDelete] = {
        ...cart[itemIndexDelete],
        quantity: cart[itemIndexDelete].quantity - 1
      };
      return [...cart];
    }
    cart.splice(cart.indexOf(action.moto), 1);
    return [...cart];
    
    case actionTypes.SAVE_PRODUCT:
      return [];

    case actionTypes.UPDATE_CART:
      return [];
    default:
      return cart;
  }
}

export default cartReducer;