import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../List/MotosList';
import Detail from '../Detail/Detail';
import Lobby from '../Lobby/Lobby';
import SignIn from '../SignIn/SignIn';
import { ContactForm } from '../ContactForm/ContactForm';

const Stack = createStackNavigator();

export const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Lobby" component={Lobby} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ContactForm" component={ContactForm} />
    </Stack.Navigator>
  );
};
