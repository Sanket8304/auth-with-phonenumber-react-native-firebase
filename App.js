/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Login from './app/screens/Login';
import VerifyOtp from './app/screens/VerifyOtp';
import Home from './app/screens/Home';
import AppNavigation from './app/navigation/AppNavigation';

const App = () => {
  return <AppNavigation />;
};

export default App;
