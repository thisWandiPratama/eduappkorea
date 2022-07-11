import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../container/login'
import Home from '../container/home'
import Register from '../container/register'
import About from "../container/about";
import Alphabet from '../container/alphabet'
import Kamus from '../container/kamus'
import Quiz from '../container/quiz'
import Splashscreen from '../container/splashscreen'
import Pembelajaran from '../container/pembelajaran'

const Stack = createNativeStackNavigator();

function Route() {
  return (
      <Stack.Navigator initialRouteName='Splashscreen'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Alphabet" component={Alphabet} />
        <Stack.Screen name="Kamus" component={Kamus} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Pembelajaran" component={Pembelajaran} />
      </Stack.Navigator>
  );
}

export default Route;