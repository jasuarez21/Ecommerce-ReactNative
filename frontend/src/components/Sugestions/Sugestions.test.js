import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import {Sugestions} from './Sugestions';

describe('When invoked a Sugestions component', () => {
    test('Should render the sugestion component with inputs', () => {
        const sugestion= render(<Sugestions />)
        expect(sugestion).toMatchSnapshot();
    })
})