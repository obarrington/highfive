import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import ScreenSelection from './ScreenSelection'




export default class App extends Component {
//  constructor() {
  //  super(props);
  //  this.state = { text: 'username'};
  //}
  render() {
    return (
      //<Login style={styles.container}/>
      <ScreenSelection/>
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
