import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/route'

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;