import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Detail from './Detail';

describe('When invoked a Detail component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        motos: [{
              _id: '2',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com'
          }
        ]
    });
    let route;
    let motos;
    beforeEach(() => {
        jest.spyOn(actions, 'addToCart').mockReturnValueOnce({ type: '' });
        route = {
            params: {
                motoSelected : '2'
            }
        }
      });
    test('Should render a moto with detail', () => {
        const detail = render(<Provider store={store}><Detail route={route} motos={motos} /></Provider>)
        expect(detail).toMatchSnapshot();
    })
})

describe('When invoked a Detail component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        motos: [{
              _id: '2',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com',
              stock: 3
          }
        ]
    });
    let route;
    let motos;
    beforeEach(() => {
        jest.spyOn(actions, 'addToCart').mockReturnValueOnce({ type: '' });
        route = {
            params: {
                motoSelected : '2'
            }
        }
      });
    test('Should render a moto with detail', () => {
        const detail = render(<Provider store={store}><Detail route={route} motos={motos} /></Provider>)
        expect(detail).toMatchSnapshot();
    })
    test('Then navigation.navigate addbuton is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Detail route={route} motos={motos} /></Provider>);
        const image = getByTestId('addButton');
        fireEvent.press(image);
        expect(actions.addToCart).toHaveBeenCalled();
      });
})