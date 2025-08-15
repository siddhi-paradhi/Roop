import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './navigation/appnavigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppNavigator />
    </>
  );
}
