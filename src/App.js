import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './reduxStore';
import Login from './Login/LoginComponent';
import ScreenSelection from './ScreenSelection';
import ProfileScreen from './ProfileScreen';
import PromptScreen from './PromptScreen';
import WriteScreen from './WriteScreen';
import ActualDrawingScreen from './ActualDrawingScreen';
import EndScreen from './EndScreen';
import CreationScreen from './Login/AccountCreationComponent';
import Settings from './Settings';
import HandDrawScreen from './HandDrawScreen';
import Camera from './camera';
import ConfirmPic from './ConfirmPic';

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
    Settings: {screen: Settings},
    HandDraw: {screen: HandDrawScreen},
    camera: {screen: Camera},
    ConfirmPic: {screen: ConfirmPic},
  },
  {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    },
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
