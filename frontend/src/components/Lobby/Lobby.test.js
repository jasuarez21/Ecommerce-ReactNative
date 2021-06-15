import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Lobby from './Lobby';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Lobby component', () => {
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
        navigation = {
            navigate: jest.fn()
        };
      });

    test('Should render the lobby of page', () => {
        const lobby = render(<Provider store={store}><Lobby navigation={navigation} /></Provider>)
        expect(lobby).toMatchSnapshot();
    })
})

describe('When image button is pressed', () => {
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
        jest.spyOn(actions, 'logout').mockReturnValueOnce({ type: '' });
        dispatch = jest.fn();
        navigation = {
            navigate: jest.fn()
        };
      });
    test('Then navigation.navigate scooter is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
      const image = getByTestId('scooter');
      fireEvent.press(image);
      expect(navigation.navigate).toHaveBeenCalled();
    });
    test('Then navigation.navigate offer is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('offer');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then navigation.navigate racing is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('racing');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then navigation.navigate custom is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('custom');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then navigation.navigate vespa is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('vespa');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then navigation.navigate casco is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('casco');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then logout is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('logout');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
      test('Then setMotoSearch is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby /></Provider>);
        const searchInput = getByTestId('searchInput');
        const setMotoSearch = jest.fn()
        fireEvent.changeText(searchInput, setMotoSearch);
       expect(setMotoSearch).toHaveBeenCalled();
      });
  });

  describe('When image button is pressed', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        user:{ 
              token : 'baibfbaibaka',
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
        dispatch = jest.fn();
        navigation = {
            navigate: jest.fn()
        };
      });
      test('Then logout func is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('logout2');
        fireEvent.press(image);
        expect(actions.logout).toHaveBeenCalled();
      });
      test('Then setMotoSearch is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby /></Provider>);
        const searchInput = getByTestId('searchInput');
        const setMotoSearch = jest.fn()
        fireEvent.changeText(searchInput, setMotoSearch);
       expect(setMotoSearch).toHaveBeenCalled();
      });
      test('Then navigation.navigate is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><Lobby navigation={navigation}/></Provider>);
        const image = getByTestId('navigateButton');
        fireEvent.press(image);
        expect(navigation.navigate).toHaveBeenCalled();
      });
  });