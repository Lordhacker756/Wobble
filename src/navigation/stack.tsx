import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Details} from '../screens';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}