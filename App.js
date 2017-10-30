import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

const fireboi = require('./fireboi');

var prompt = "";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promptee: "",
      isLoading: false,
    };
  }


  componentWillMount() {
    fireboi.getMeAPrompt('draw').then(p => {
      prompt = p;
      this.setState({ promptee: prompt });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{this.state.promptee}</Text>
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
