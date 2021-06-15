import cartReducer from '../src/redux/reducers/cartReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('when invoked a cartReducer func', () => {
  test('should return an array in add to cart', () => {
    const action = {
      type: actionTypes.ADD_TO_CART,
      moto: { id: 1, data: 'Josep' }
    };
    const cart = [];
    const result = cartReducer(cart, action);
    expect(result).toEqual([{ id: 1, data: 'Josep', quantity: 1 }]);
  });
  test('should return an array in add to cart', () => {
    const action = {
      type: actionTypes.ADD_TO_CART,
      moto: { id: 1, moto: 'Honda' }
    };
    const cart = [{id: 1, moto: 'Honda', quantity: 1}];
    const result = cartReducer(cart, action);
    expect(result).toEqual([{id: 1, moto: 'Honda', quantity: 2 }]);
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.LOG_IN,
      moto: [{ id: 1, data: 'Josep' }]
    };
    const cart = [];
    const result = cartReducer(cart, action);
    expect(result).toEqual(cart);
  });
  test('should return an array in delete to cart', () => {
    const action = {
      type: actionTypes.DELETE_CART,
      moto: { id: 1, data: 'Yamaha' }
    };
    const cart = [{marca: 'honda'}];
    const result = cartReducer(cart, action);
    expect(result).toEqual([]);
  });
  test('should return an array in delete to cart', () => {
    const action = {
      type: actionTypes.DELETE_CART,
      moto: { id: 1, data: 'Honda' }
    };
    const cart = [{id: 1, data: 'Honda', quantity: 3}];
    const result = cartReducer(cart, action);
    expect(result).toEqual([{id: 1, data: 'Honda', quantity: 2}]);
  });
  test('should return an array in delete to cart', () => {
    const action = {
      type: actionTypes.UPDATE_CART,
      moto: { id: 1, data: 'Honda' }
    };
    const cart = [];
    const result = cartReducer(cart, action);
    expect(result).toEqual([]);
  });
  test('should return an array in delete to cart', () => {
    const action = {
      type: actionTypes.SAVE_PRODUCT,
      moto: { id: 1, data: 'Honda' }
    };
    const cart = [];
    const result = cartReducer(cart, action);
    expect(result).toEqual([]);
  });
  test('should return an array in delete to cart', () => {
    const action = {
      type: actionTypes.SAVE_PRODUCT,
      moto: { id: 1, data: 'Honda' }
    };
    const cart = undefined;
    const result = cartReducer(cart, action);
    expect(result).toEqual([]);
  });
});