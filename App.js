import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/reduxStore';
import Login from './src/Login';
import ScreenSelection from './src/ScreenSelection';
import ProfileScreen from './src/ProfileScreen';
import PromptScreen from './src/PromptScreen';
import WriteScreen from './src/WriteScreen';
import ActualDrawingScreen from './src/ActualDrawingScreen';
import EndScreen from './src/EndScreen';

import { StackNavigator } from 'react-navigation';

export const AppNavigation = StackNavigator(
  {
    Main: {screen: Login},
    Selection: {screen: ScreenSelection},
    Profile: {screen: ProfileScreen},
    Prompt: {screen: PromptScreen},
    draw: {screen: ActualDrawingScreen},
    write: {screen: WriteScreen},
    end: {screen: EndScreen}
  },
  {
    headerMode: 'none'
  }
);

class App extends Component {

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
