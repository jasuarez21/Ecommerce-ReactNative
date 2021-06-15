import motosReducer from '../src/redux/reducers/motosReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('when invoked a motosReducer func', () => {
  test('should return an array', () => {
    const action = {
      type: actionTypes.GET_MOTOS,
      data: { id: 1, data: 'Josep' }
    };
    const motos = [];
    const result = motosReducer(motos, action);
    expect(result).toEqual({ id: 1, data: 'Josep' });
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.LOG_IN,
      data: { id: 1, data: 'Josep' }
    };
    const motos = [];
    const result = motosReducer(motos, action);
    expect(result).toEqual(motos);
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.GET_MOTOS,
      data: { id: 1, data: 'Josep' }
    };
    const motos = undefined;
    const result = motosReducer(motos, action);
    expect(result).toEqual({ id: 1, data: 'Josep' });
  });
});