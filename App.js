import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Login from './src/Login';
import ScreenSelection from './src/ScreenSelection';
import PromptScreen from './src/PromptScreen';
import WriteScreen from './src/WriteScreen';
import DrawScreen from './src/DrawScreen';
import { StackNavigator } from 'react-navigation';

export const BasicApp = StackNavigator({
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
  Prompt: {screen: PromptScreen},
  draw: {screen: DrawScreen},
  write: {screen: WriteScreen}
});

class App extends Component {

  render() {
    return (
    <BasicApp />
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
