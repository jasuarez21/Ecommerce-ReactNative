import {GetMotos, login, logout, signUp, addToCart, loadCart, deleteFromCart, reloadCart, saveOrder, deleteAccount} from '../src/redux/actions/actionCreators';
import axios from 'axios';
import actionTypes from '../src/redux/actions/actionTypes';

jest.mock('axios');

describe('When invoked a getMotos function', () => {
    test('Should call a dispatch function ', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce('josep');
        await GetMotos()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})

test('should dispatch GET_MOTOS_ERROR', async () => {
    axios.get.mockRejectedValue({data: 'josep'});
    const dispatch = jest.fn();
    await GetMotos()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ERROR,
    });
  });

describe('When invoked a login function', () => {
    test('should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce('pepe');
        await login()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        axios.mockRejectedValueOnce();
        const dispatch = jest.fn();
        await login()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.ERROR,
        });
      });
})

describe('When invoked a logout function', () => {
    test('should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce('logout');
        await logout()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        axios.post.mockRejectedValueOnce();
        const dispatch = jest.fn();
        await logout()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.ERROR,
        });
      });
})

describe('When invoked a signUp function', () => {
    test('should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce('signup');
        await signUp()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        axios.post.mockRejectedValueOnce();
        const dispatch = jest.fn();
        await signUp()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.ERROR,
        });
      });
})


describe('When invoked a addTocart function', () => {
    test('should return and object with type and data',  () => {
        const funcResult = addToCart('josep');
        const result = {
            type: actionTypes.ADD_TO_CART,
            moto: 'josep'

        }
        expect(result).toEqual(funcResult);
    })
})

describe('When invoked a loadCart function', () => {
    test('should return and object with type',  () => {
        const funcResult = loadCart();
        const result = {
            type: actionTypes.LOAD_CART,
        }
        expect(result).toEqual(funcResult);
    })
})

describe('When invoked a deleteFromCart function', () => {
    test('should return and object with type and moto',  () => {
        const funcResult = deleteFromCart('honda');
        const result = {
            type: actionTypes.DELETE_CART,
            moto: 'honda'
        }
        expect(result).toEqual(funcResult);
    })
})

describe('When invoked a reloadCart function', () => {
    test('should call a dispatch function', async () => {
        const moto = [{
            modelo: 'hondda',
            marca: 'cbr'
        }]
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce('honda');
        await reloadCart(moto)(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        axios.post.mockRejectedValue();
        const dispatch = jest.fn();
        await reloadCart()(dispatch);
        expect(dispatch).toHaveBeenCalled();
      });
})

describe('When invoked a saveOrder function', () => {
    test('should call a dispatch function', async () => {
        let user = {
            alias: 'Anna',
            cart: []
        }
        let cart = [{name: 'moto'}];
        let token = 'ihqbfibqfbqifbiqbj';
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce('saveOrder');
        await saveOrder(user, cart, token)(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        let user = {
            alias: 'Anna',
            cart: []
        }
        let cart = [{name: 'moto'}];
        let token = 'ihqbfibqfbqifbiqbj';
        axios.post.mockRejectedValueOnce();
        const dispatch = jest.fn();
        await saveOrder(user, cart, token)(dispatch);
        expect(dispatch).toHaveBeenCalled();
      });
})

describe('When invoked a deleteAccount function', () => {
    test('should call a dispatch function', async () => {
        let user = {
            alias: 'Anna',
            cart: []
        }
        let token = 'ihqbfibqfbqifbiqbj';
        const dispatch = jest.fn();
        axios.delete.mockResolvedValueOnce('saveOrder');
        await deleteAccount(user, token)(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
    test('should dispatch a ERROR in Promise', async () => {
        let user = {
            alias: 'Anna',
            cart: []
        }
        let token = 'ihqbfibqfbqifbiqbj';
        axios.delete.mockRejectedValueOnce();
        const dispatch = jest.fn();
        await deleteAccount(user, token)(dispatch);
        expect(dispatch).toHaveBeenCalled();
      });
})
