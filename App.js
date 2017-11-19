import React, { Component } from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/reduxStore';
import AppNavigationContainer from './src/AppNavigationContainer';


class App extends Component {

  render() {
    return (
    <Provider store = { store }>
    <AppNavigationContainer />
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
