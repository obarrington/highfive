import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import ScreenSelection from './ScreenSelection'
import { StackNavigator } from 'react-navigation';

export const BasicApp = StackNavigator({
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
//  Write: {screen: WriteScreen},
//  Draw: {screen: DrawScreen},
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi here are some changes!</Text>
        <Text></Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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