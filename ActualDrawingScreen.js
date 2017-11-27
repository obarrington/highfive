import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Alert, Platform, TouchableHighlight,
         Text, StyleSheet } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import { StackNavigator } from 'react-navigation';
import Colors from './Colors';
import DrawScreen from './DrawScreen.js';
import Header from './Header';
import ColorSelector from './ColorSelector';
import ResultImages from './ResultImages';
import Reaction from './Reaction';
import Slider from 'react-native-slider';

var foo = 'loading'
var DEFAULT_VALUE = 4;
// import React from "react";
// import Slider from "react-native-slider";
// import { AppRegistry, StyleSheet, View, Text } from "react-native";

export default class ActualDrawingScreen extends React.Component {
//   state = {
//     fake: 0,
//     value: 0.2
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
        // <Slider
        //   value={this.state.value}
        //   onValueChange={value => this.setState({ value })}
        //   minimumValue={-10}
        //   maximumValue={42}
        //   minimumTrackTintColor='#1fb28a'
        //   maximumTrackTintColor='#d3d3d3'
        //   thumbTintColor='#1a9274'
        // />
        // <Text>
        //   Value: {this.state.value}
        // </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//     alignItems: "stretch",
//     justifyContent: "center"
//   }
// });
  constructor(props, context) {
    super(props, context);

    this.state = {
      results: [],
      color: Colors.color7,
      value: 4,
      donePaths: [],
      totalOffset: 0,
      prompt: 'loading'
    };
    this.promptText = this.props.navigation.state.params.promptText;
    console.log('In constructor');
    console.log(this.props.navigation.state.params.promptText)
    this._undo = this._undo.bind(this);
    this._setDonePaths = this._setDonePaths.bind(this);
  }

  DidJob() {
    console.log('did my h*cking job');
  }

  componentWillMount() {
    // this.setState({prompt: this.promptText}, this.DidJob());
    // console.log('in will mount');
    // console.log(this.state.prompt);
    // this.setState({prompt: this.promptText}, this.DidJob());
    foo = this.promptText;
    console.log(foo);
    console.log(this.state.value);
  }

  _onPressButton(){
    console.log('in button');
    console.log(foo);
    Alert.alert(foo)
    // Alert.alert(
    //   this.promptText,
    //   'My Alert Msg',
    //   [
    //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   { cancelable: false }
    // )
  };

  _cancel = () => {
    this.setState({ donePaths: [] });
  }

  _undo = () => {
    this.setState({ donePaths: this.state.donePaths.slice(0, -1) });
  }

  _save = async () => {
    const result = await takeSnapshotAsync(
      this._signatureView,
      { format: 'png', result: 'base64', quality: 1.0 }
    );

    const results = this.state.results;
    results.push(result);

    this.setState({ results });
  }

  _setDonePaths = (donePaths) => {
    this.setState({ donePaths });
  }

  _changeColor = (color) => {
    this.setState({ color });
  }
  // IF NEEDED:
  // <Header
  //   save={this._save}
  //   undo={this._undo}
  //   cancel={this._cancel}
  // />
  // <ResultImages images={this.state.results} />
  _onLayoutContainer = (e) => {
    this.state.totalOffset += e.nativeEvent.layout.y;
    //this.state.reaction.setOffset(0);
  }

  render() {
    return (
      <View
        onLayout={this._onLayoutContainer}
        style={styles.container}
      >

        <ColorSelector onPress={this._changeColor} />

        <View style={styles.container2}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            minimumValue={1}
            maximumValue={20}
            step={1}
            minimumTrackTintColor='#1fb28a'
            maximumTrackTintColor='#d3d3d3'
            thumbTintColor='#1a9274'
          />
          <Text>
            Stroke Width: {this.state.value}
          </Text>
        </View>

        <View
            onLayout={this._onLayoutContainer}
        >
          <DrawScreen
            ref={(view) => { this._signatureView = view; }}
            donePaths={this.state.donePaths}
            setDonePaths={this._setDonePaths}
            containerStyle={{ backgroundColor: '#FFF', marginTop: 10 }}
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').width+50}
            color={this.state.color}
            strokeWidth={this.state.value}
            totalOffset={this.state.totalOffset}
          />
        </View>

        <TouchableHighlight onPress={this._onPressButton} underlayColor
            ="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>ClickForPrompt</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

DrawScreen.route = {
  navigationBar: {
    visible: false
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

  container2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },

  footer: {
    color: '#555',
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    right: 10
  }
});
