import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './reduxStore';
import Login from './Login';
import ScreenSelection from './ScreenSelection';
import ProfileScreen from './ProfileScreen';
import PromptScreen from './PromptScreen';
import WriteScreen from './WriteScreen';
import ActualDrawingScreen from './ActualDrawingScreen';
import EndScreen from './EndScreen';
import CreationScreen from './Login/AccountCreationComponent';

import { StackNavigator } from 'react-navigation';

export const AppNavigation = StackNavigator(
  {
    Main: {screen: Login},
    Selection: {screen: ScreenSelection},
    Profile: {screen: ProfileScreen},
    Prompt: {screen: PromptScreen},
    draw: {screen: ActualDrawingScreen},
    write: {screen: WriteScreen},
    end: {screen: EndScreen},
    Creation: {screen: CreationScreen},
  },
  {
    headerMode: 'none'
  }
);

export class App extends Component {

  render() {
    return (
    <Provider store = { store }>
      <AppNavigation />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App)

export default App
