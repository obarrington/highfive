import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import ScreenSelection from './ScreenSelection';
import ProfileScreen from './ProfileScreen';
import PromptScreen from './PromptScreen';
import WriteScreen from './WriteScreen';
import DrawScreen from './DrawScreen';
import EndScreen from './EndScreen';

import { StackNavigator } from 'react-navigation';

export const BasicApp = StackNavigator(
  {
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
  Profile: {screen: ProfileScreen},
  Prompt: {screen: PromptScreen},
  draw: {screen: DrawScreen},
  write: {screen: WriteScreen},
  end: {screen: EndScreen}
  },
  {
  headerMode: 'none'
  }
);
export default class App extends Component {

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
