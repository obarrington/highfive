import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Login from './Login';
import ScreenSelection from './ScreenSelection';
import PromptScreen from './PromptScreen';
import WriteScreen from './WriteScreen';
import DrawScreen from './DrawScreen';
import CreationScreen from './Login/AccountCreationComponent';

export const AppNavigation = StackNavigator({
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
  Prompt: {screen: PromptScreen},
  draw: {screen: DrawScreen},
  write: {screen: WriteScreen},
  Creation: {screen: CreationScreen},
});

//eslint-disable-next-line no-unused-vars
const AppNavigationContainer = (state) => (
  <AppNavigation state />
);

export default connect(state => state)(AppNavigationContainer);
