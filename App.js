import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

const fireboi = require('./fireboi');

// console.log("test");
// //var promptee = fireboi.getMeAPrompt('draw');
// var prompt = fireboi.getMeAPrompt('draw');
// console.log(prompt);
//console.log(promptee);

var prompt = "";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promptee: "",
      isLoading: false,
    };
  }

  // setStateAsync(state) {
  //   return new Promise((resolve) => {
  //     this.setState(state, resolve)
  //   });
  // }

  componentWillMount() {
    prompt = "I'mma failure";
    console.log("Before:");
    console.log(prompt);
    //prompt = fireboi.getMeAPrompt('draw');
    fireboi.getMeAPrompt('draw').then(p => {
      prompt = p;
      console.log("Prompt generator gives me:")
      console.log(prompt);
      this.setState({ promptee: prompt });
    });
    // console.log("After:");
    // console.log(prompt);
  }

  // shouldComponentUpdate() {
  //   if (prompt === "") {
  //     return true;
  //   }
  //   return false;
  // }
  //
  // componentWillUpdate() {
  //   this.setState({ promptee: prompt});
  // }

  // async componentDidMount() {
  //   const promptly = await fireboi.getMeAPrompt('draw');
  //   console.log("I'm a b a d b o y e and didn't let the await function finish");
  //   console.log(promptly);
  //   await this.setStateAsync({promptee: promptly});
  // }

  render() {
    // console.log(promptee);
    // if (promptee == "") {
    //   console.log("Rude b o y e");
    // }
    //this.setState({ promptee: prompt});
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
