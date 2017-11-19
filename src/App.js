import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from '.src/Login';
import ScreenSelection from '.src/ScreenSelection';
import PromptScreen from '.src/PromptScreen';
import EndScreen from '.src/EndScreen';
import { StackNavigator } from 'react-navigation';

export const BasicApp = StackNavigator({
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
  Prompt: {screen: PromptScreen},
  EndScreen: {screen: EndScreen}
});

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
