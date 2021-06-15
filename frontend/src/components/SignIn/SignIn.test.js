import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import {
    hasNameError,
    hasEmailError,
    hasPasswordError,
  } from '../../utils/validation';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import SignIn from './SignIn';

jest.mock('../../redux/actions/actionCreators');
jest.mock('../../utils/validation');

describe('When invoked a SignIn component', () => {
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
        jest.spyOn(actions, 'signUp').mockReturnValueOnce({ type: '' });
        navigation = {
            navigate: jest.fn()
        };

      });

    test('Should render the signin component with inputs', () => {
        const signin = render(<Provider store={store}><SignIn navigation={navigation} /></Provider>)
        expect(signin).toMatchSnapshot();
    })
    test('Then navigation.navigate signUp is invoked', () => {
        const { getByTestId } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByTestId('signup');
        fireEvent.press(image);
        expect(actions.signUp).toHaveBeenCalled();
      });
      test('Then setEmail is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('email');
        let setEmail = jest.fn();
        fireEvent.changeText(image, setEmail);
        expect(setEmail).toHaveBeenCalled();
      });
      test('Then setPassword is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('password');
        let setPassword = jest.fn();
        fireEvent.changeText(image, setPassword);
        expect(setPassword).toHaveBeenCalled();
      });
      test('Then setAlias is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('alias');
        let setAlias = jest.fn();
        fireEvent.changeText(image, setAlias);
        expect(setAlias).toHaveBeenCalled();
      });
      test('Then setAlias endEdit is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('alias');
        fireEvent(image, 'onEndEditing', hasNameError);
        expect(hasNameError).toHaveBeenCalled();
      });
      test('Then setEmail endEdit is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('email');
        fireEvent(image, 'onEndEditing', hasEmailError);
        expect(hasEmailError).toHaveBeenCalled();
      });
      test('Then setPassword endEdit is invoked', () => {
        const { getByPlaceholderText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByPlaceholderText('password');
        fireEvent(image, 'onEndEditing', hasPasswordError);
        expect(hasPasswordError).toHaveBeenCalled();
      });
      test('Then Avatar onPress', () => {
        const { getByText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByText('avatar');
        let setAvatar = jest.fn();
        fireEvent.press(image, setAvatar);
        expect(setAvatar).not.toHaveBeenCalled();
      });
      test('Then Avatar onPress', () => {
        const { getByText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByText('avatar1');
        let setAvatar = jest.fn();
        fireEvent.press(image, setAvatar);
        expect(setAvatar).not.toHaveBeenCalled();
      });
      test('Then Avatar onPress', () => {
        const { getByText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByText('avatar2');
        let setAvatar = jest.fn();
        fireEvent.press(image, setAvatar);
        expect(setAvatar).not.toHaveBeenCalled();
      });
      test('Then Avatar onPress', () => {
        const { getByText } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
        const image = getByText('avatar3');
        let setAvatar = jest.fn();
        fireEvent.press(image, setAvatar);
        expect(setAvatar).not.toHaveBeenCalled();
      });
})


describe('When invoked a SignIn component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
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
      jest.spyOn(actions, 'signUp').mockReturnValueOnce({ type: '' });
      navigation = {
          navigate: jest.fn()
      };
    });

  test('Should render the signin component with inputs', () => {
      const signin = render(<Provider store={store}><SignIn navigation={navigation} /></Provider>)
      expect(signin).toMatchSnapshot();
  })
  test('Then navigation.navigate signUp is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><SignIn navigation={navigation}/></Provider>);
      const image = getByTestId('buttonDefinedUser');
      fireEvent.press(image);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  
  
    
   
    
  
})