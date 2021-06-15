import usersReducer from '../src/redux/reducers/usersReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('when invoked a motosReducer func', () => {
  test('should return an array in login', () => {
    const action = {
      type: actionTypes.LOG_IN,
      data: {user: 'Josep' }
    };
    const users = [];
    const result = usersReducer(users, action);
    expect(result).toEqual({user: 'Josep' });
  });
  test('should return an array in logout', () => {
    const action = {
      type: actionTypes.LOG_OUT,
      data: {user: 'Chema' }
    };
    const users = [];
    const result = usersReducer(users, action);
    expect(result).toEqual({user: 'Chema' });
  });
  test('should return an array in SIGN_UP', () => {
    const action = {
      type: actionTypes.SIGN_UP,
      data: {user: 'Anna' }
    };
    const users = [];
    const result = usersReducer(users, action);
    expect(result).toEqual({user: 'Anna' });
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.ADD_TO_CART,
      data: [{ id: 1, data: 'Josep' }]
    };
    const user = [];
    const result = usersReducer(user, action);
    expect(result).toEqual(user);
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.DELETE_ACCOUNT,
      data: [{ id: 1, data: 'Josep' }]
    };
    const user = [];
    const result = usersReducer(user, action);
    expect(result).toEqual([]);
  });
  test('should return an array', () => {
    const action = {
      type: actionTypes.DELETE_ACCOUNT,
      data: [{ id: 1, data: 'Josep' }]
    };
    const user = undefined;
    const result = usersReducer(user, action);
    expect(result).toEqual([]);
  });
});