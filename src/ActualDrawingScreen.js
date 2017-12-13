import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, Alert, Platform, TouchableHighlight,
         Text, StyleSheet } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import { StackNavigator } from 'react-navigation';
import Colors from './Colors';
import DrawScreen from './DrawScreen.js';
//import Header from './Header';
import ColorSelector from './ColorSelector';
//import ResultImages from './ResultImages';
import Reaction from './Reaction';
import Slider from 'react-native-slider';
import Button from './Button';

var foo = 'loading'
var DEFAULT_VALUE = 4;
// import React from "react";
// import Slider from "react-native-slider";
// import { AppRegistry, StyleSheet, View, Text } from "react-native";

export default class ActualDrawingScreen extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      results: [],
      color: Colors.color7,
      value: 4,
      donePaths: [],
      doneCircle: [],
      totalOffset: 0,
      prompt: 'loading',
      seconds: 120
    };
    this.promptText = this.props.navigation.state.params.prompt;
    console.log('In constructor');
    console.log(this.props.navigation.state.params.promptText)
    this._undo = this._undo.bind(this);
    this._setDonePaths = this._setDonePaths.bind(this);
    this._setDoneCircles = this._setDoneCircles.bind(this);
    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen() {
    const { navigate } = this.props.navigation;
    navigate('end');
  }

  DidJob() {
    console.log('did my h*cking job');
  }

  componentWillMount() {
    // this.setState({prompt: this.promptText}, this.DidJob());
    // console.log('in will mount');
    // console.log(this.state.prompt);
    // this.setState({prompt: this.promptText}, this.DidJob());

    var timer = setInterval(() => {
      this.setState(previousState => {
        return { seconds: previousState.seconds - 1 };
      });
    }, 1000);

    this.setState({timer: timer});
    setTimeout(this.nextScreen, 132000);

    foo = this.promptText;
    console.log(foo);
    console.log(this.state.value);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  _onPressButton(){
    console.log('in button');
    console.log(foo);
    Alert.alert(foo)
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
    console.log('_setDonePahts');
    console.log(donePaths);
    this.setState({ donePaths });
  }

  _setDoneCircles = (doneCircle) => {
    console.log('_setDoneCircles');
    console.log(doneCircle);
    this.setState({ doneCircle });
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
      <View style={styles.header}>
        <ColorSelector onPress={this._changeColor} />
        </View>
        <View style={styles.container2}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            minimumValue={1}
            maximumValue={20}
            step={1}
            minimumTrackTintColor={this.state.color}
            maximumTrackTintColor='#d3d3d3'
            thumbTintColor={this.state.color}
          />
          <Text style={styles.timerStyle}>
            Stroke Width: {this.state.value}
          </Text>
          <Text style={styles.timerStyle}>{this.state.seconds}</Text>
        </View>
            <View style={styles.promptButton}>
            <Button
              label="View Prompt"
              styles={{button: styles.headerButton, label: styles.buttonText}}
              onPress={this._onPressButton}
            />
            </View>

        <View
            onLayout={this._onLayoutContainer}
        >
          <DrawScreen
            ref={(view) => { this._signatureView = view; }}
            donePaths={this.state.donePaths}
            setDonePaths={this._setDonePaths}
            doneCircle={this.state.doneCircle}
            setDoneCircles={this._setDoneCircles}
            containerStyle={{ backgroundColor: '#FFF', marginTop: 10 }}
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').width+50}
            color={this.state.color}
            strokeWidth={this.state.value}
            totalOffset={this.state.totalOffset}
          />
          </View>
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
    backgroundColor: '#8fbc8f'
  },
  timerStyle: {
  color: '#FFF',
  fontWeight: 'bold',
  //fontFamily: 'Verdana',
  alignSelf: 'center',
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
  },
  headerButton: {
    backgroundColor: '#34A853',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
    //fontFamily: 'Verdana',
  },
  header: {
    marginTop: 25,
    backgroundColor: '#8fbc8f',
  }
});
