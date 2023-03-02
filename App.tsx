/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import Restaurant from './screens/Restaurant';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Opening">
          <Stack.Screen
            name="Opening"
            component={MainScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}


export default App;
