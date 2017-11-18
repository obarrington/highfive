import React, { Component } from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/reduxStore';

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
    <Provider store = { store }>
    <BasicApp />
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
