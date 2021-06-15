import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Cart from './Cart';

describe('When invoked a Cart component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        cart: [{
          moto: {
              _id: '2',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com'
          }
        }],
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
    beforeEach(() => {
        jest.spyOn(actions, 'deleteFromCart').mockReturnValueOnce({ type: '' });
        jest.spyOn(actions, 'reloadCart').mockReturnValueOnce({ type: '' });
      });

    test('Should render a moto with detail', () => {
        const cart = render(<Provider store={store}><Cart /></Provider>)
        expect(cart).toMatchSnapshot();
    })
    test('Then login function is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Cart /></Provider>);
      const image = getByTestId('buttonDelete');
      fireEvent.press(image);
      expect(actions.deleteFromCart).toHaveBeenCalled();
    });
})

describe('When invoked a Cart component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
      cart: [{
        moto: {
            _id: '2',
            marca: 'Aprilia',
            modelo: 'SR',
            cc: 50, 
            precio: 550,
            descripcion: 'Moto comoda para la carretera',
            picture: 'img.com'
        }
      }],
      user: {
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
      jest.spyOn(actions, 'deleteFromCart').mockReturnValueOnce({ type: '' });
      jest.spyOn(actions, 'reloadCart').mockReturnValueOnce({ type: '' });
      navigation = {
        navigate: jest.fn()
      }
    });

  test('Should render a moto with detail', () => {
      const cart = render(<Provider store={store}><Cart /></Provider>)
      expect(cart).toMatchSnapshot();
  })
  test('Then login function is invoked', () => {
    const { getByTestId } = render(<Provider store={store}><Cart navigation={navigation}/></Provider>);
    const image = getByTestId('buyButton');
    fireEvent.press(image);
    expect(navigation.navigate).toHaveBeenCalled();
  });
})