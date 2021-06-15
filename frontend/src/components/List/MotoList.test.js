import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import List from './MotosList';

describe('When invoked a List component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        motos: [{
              _id: '2',
              tipo: 'scooter',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com',
              anteriorPrecio: 300
          }
        ]
    });
    let route;
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'GetMotos').mockReturnValueOnce({ type: '' });
        route = {
            params: {
                typeMoto : 'scooter'
            }
        }
      });
      navigation = {
          navigate: jest.fn()
      };

    test('Should render a list of motos with type selected', () => {
        const list = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>)
        expect(list).toMatchSnapshot();
    })
    test('Then navigation.navigate detail is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>);
        const image = getByTestId('detailMoto');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
})

describe('When invoked a List component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        motos: [{
              _id: '2',
              tipo: 'scooter',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com',
              anteriorPrecio: 300
          }
        ]
    });
    let route;
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'GetMotos').mockReturnValueOnce({ type: '' });
        route = {
            params: {
                typeMoto : 'SR'
            }
        }
      });
      navigation = {
          navigate: jest.fn()
      };

    test('Should render a list of motos with type selected', () => {
        const list = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>)
        expect(list).toMatchSnapshot();
    })
    test('Then navigation.navigate detail is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>);
        const image = getByTestId('detailMoto');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
})

describe('When invoked a List component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        motos: [{
              _id: '2',
              tipo: 'scooter',
              marca: 'Aprilia',
              modelo: 'SR',
              cc: 50, 
              precio: 550,
              descripcion: 'Moto comoda para la carretera',
              picture: 'img.com',
              anteriorPrecio: 300
          }
        ]
    });
    let route;
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'GetMotos').mockReturnValueOnce({ type: '' });
        route = {
            params: {
                typeMoto : '50'
            }
        }
      });
      navigation = {
          navigate: jest.fn()
      };

    test('Should render a list of motos with type selected', () => {
        const list = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>)
        expect(list).toMatchSnapshot();
    })
    test('Then navigation.navigate detail is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><List route={route} navigation={navigation} /></Provider>);
        const image = getByTestId('detailMoto');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
})