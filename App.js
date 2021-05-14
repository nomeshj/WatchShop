import React from 'react';
import Counter from './src/counter';
import store from './src/store/store';
import {Provider} from 'react-redux';
//import { render } from 'react-dom';
import {Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './src/cart';
import AddressPage from './src/AddressPage';
import PaymentPage from './src/PaymentPage';
import ThanksPage from './src/ThanksPage'

const Stack = createStackNavigator();

const App = (props) =>{
  
  return (
    <Provider store ={store}>
      
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="counter"
              component={Counter}
              options={{ headerShown: false  }} 
            />
            <Stack.Screen
              name="cart"
              component={Cart}
            />
           <Stack.Screen
              name="address"
              component={AddressPage}
            />
            <Stack.Screen
              name="payment"
              component={PaymentPage}
            />
            <Stack.Screen
              name="thanks"
              component={ThanksPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
  
};

export default App;