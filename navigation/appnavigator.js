import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homescreen';
//import TryOnScreen from '../screens/TryOnScreen';
//import MarketplaceScreen from '../screens/MarketplaceScreen';
//import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
