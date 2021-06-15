import { User } from './../../models/user';
import axios from 'axios';
import {URL_MOTOS, URL_LOGIN, URL_LOGOUT, URL_SIGNUP, URL_DELETE_ACCOUNT, URL_SAVE_PRODUCTS} from '@env';
import actionTypes from './actionTypes';
import {Moto} from '../../models/moto';
import {Dispatch} from 'redux';
import {MotoActions} from '../../models/actions';
import { Order } from '../../models/order';

export function GetMotos() {
  return async (dispatch: Dispatch) => {
      try {   
      const {data} = await axios.get(URL_MOTOS);
      dispatch({
        type: actionTypes.GET_MOTOS,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}



export function login(email: string, password: string) {
  return async (dispatch: Dispatch) => {
      try {   
        const {data} = await axios.post(URL_LOGIN, {email, password});
        dispatch({
          type: actionTypes.LOG_IN,
          data,
        });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}

export function logout() {
  return async (dispatch: Dispatch) => {
      try {   
        const {data} = await axios.post(URL_LOGOUT);
        dispatch({
          type: actionTypes.LOG_OUT,
          data,
        });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}


export function signUp(email: string, password: string, alias: string, avatar: string) {
  return async (dispatch: Dispatch) => {
      try {   
        const {data} = await axios.post(URL_SIGNUP, {email, password, alias, avatar});
        dispatch({
          type: actionTypes.SIGN_UP,
          data,
        });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}

export function addToCart(moto: Moto): MotoActions {
  return {
    type: 'ADD_TO_CART',
    moto
  };
}

export function loadCart(): MotoActions {
  return {
    type: 'LOAD_CART'
  };
}

export function deleteFromCart(moto: Moto): MotoActions {
  return {
    type: 'DELETE_CART',
    moto,
  };
}

export function reloadCart(moto: Array<Moto>){
  return async (dispatch: Dispatch) => {
    try {   
      for(let i = 0; i < moto.length; i++){
        await axios.post(`${URL_MOTOS}/${moto[i]._id}`, moto[i]);
        dispatch({
          type: actionTypes.UPDATE_CART
        });
      }
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
    });
  }
}
}

export function saveOrder(user: User, cart: Order, token: string){
  user.cart.push(cart);
  const config = { 
    headers: {
        authorization: `Bearer ${token}`,
    }
  }
    return async (dispatch: Dispatch) => {
      try {   
          await axios.post(URL_SAVE_PRODUCTS, {_id: user._id, cart: user.cart}, config);
          dispatch({
            type: actionTypes.SAVE_PRODUCT
          });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}

export function deleteAccount(user: User, token: string){
    return async (dispatch: Dispatch) => {
      try {   
          await axios.delete(URL_DELETE_ACCOUNT, {headers: {
              authorization: `Bearer ${token}`,
          },
              data:{_id: user._id}
          });
          dispatch({
            type: actionTypes.DELETE_ACCOUNT
          });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  }
}