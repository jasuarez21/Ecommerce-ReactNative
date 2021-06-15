/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Image, View} from 'react-native';
import store from './src/redux/store/index';
import {Home} from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import Cart from './src/components/Cart/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            showLabel: false,
            style: {
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFB800',
              height: 60,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://i.postimg.cc/CLggRxXL/icons8-dirt-bike-100.png',
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://i.postimg.cc/nVs4XH75/icons8-motorbike-helmet-100.png',
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://i.postimg.cc/WbkxwcRY/icons8-shopping-cart-50.png',
                    }}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

export default App;
