import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Login from './Login';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Login component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        user: [{
              _id: '2',
              user : {
                  alias: 'Anna',
                  email: 'annita',
                  password: 'annaaaza',
                  avatar: 'img.com'
              }
          }
        ]
    });
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'login').mockReturnValueOnce({ type: '' });
        navigation = {
            navigate: jest.fn()
        };
      });

    test('Should render the login component with inputs', () => {
        const login = render(<Provider store={store}><Login navigation={navigation} /></Provider>)
        expect(login).toMatchSnapshot();
    })
    test('Then setEmail is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('email');
        let setEmail = jest.fn();
        fireEvent.changeText(image, setEmail);
        expect(setEmail).toHaveBeenCalled();
      });
      test('Then setPassword is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('password');
        let setPassword = jest.fn();
        fireEvent.changeText(image, setPassword);
        expect(setPassword).toHaveBeenCalled();
      });
      test('Then login function is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
        const image = getByTestId('login');
        fireEvent.press(image);
        expect(actions.login).toHaveBeenCalled();
      });
      test('Then navigation.navigate signup is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
        const image = getByTestId('signup');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
})

describe('When invoked a Login component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
      user: {
            token: 'bjwsvkjbskvbs',
            _id: '2',
            user : {
                alias: 'Anna',
                email: 'annita',
                password: 'annaaaza',
                avatar: 'img.com'
            }
        }
  });
  let navigation;
  beforeEach(() => {
      jest.spyOn(actions, 'logout').mockReturnValueOnce({ type: '' });
      jest.spyOn(actions, 'deleteAccount').mockReturnValueOnce({ type: '' });
      navigation = {
          navigate: jest.fn()
      };
    });

  test('Should render the login component with inputs', () => {
      const login = render(<Provider store={store}><Login navigation={navigation} /></Provider>)
      expect(login).toMatchSnapshot();
  })
    test('Then logout function is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
      const image = getByTestId('logoutText');
      fireEvent.press(image);
      expect(actions.logout).toHaveBeenCalled();
    });
    test('Then navigation.navigate signup is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
      const image = getByTestId('deleteAccountButton');
      fireEvent.press(image);
      expect(navigation.navigate).toHaveBeenCalled();
    });
})