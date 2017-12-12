/**
* Created by JunjiJoo on 2017-10-31.
*/
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';


export default class Write extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      seconds: 120
    };
    this.prompt = this.props.navigation.state.params.prompt;

    this.nextScreen = this.nextScreen.bind(this);
    this.viewPrompt = this.viewPrompt.bind(this);
  }

  nextScreen() {
    const { navigate } = this.props.navigation;
    navigate('end');
  }

  viewPrompt() {
    Alert.alert(
      'Prompt',
      this.prompt,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  componentWillMount() {

    var timer = setInterval(() => {
      this.setState(previousState => {
        return { seconds: previousState.seconds - 1 };
      });
    }, 1000);

    this.setState({timer: timer});
    setTimeout(this.nextScreen, 126000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button
            label="View Prompt"
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.viewPrompt}
          />
            <Button
              label="Continue"
              styles={{button: styles.headerButton, label: styles.labelSmall}}
              onPress={this.nextScreen}
            />
        </View>
        <View style={styles.timer}>
          <Text style={styles.timerStyle}>{this.state.seconds}</Text>
          </View>
        <View style = {styles.containerA}>
          <Text style = {styles.headline}>Writing</Text>
        </View>

        <View style = {styles.containerB}>
          <TextInput
            style = {styles.textInput}
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text}
            placeholder="Start writing here!"
            multiline= {true}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Verdana',

  },
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  containerA: {
    flex: 1,
    backgroundColor: '#8fbc8f',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  containerB: {
    flex: 3,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 300,
    width: 250,
    position: 'relative',
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Verdana',

  //  alignItems: 'top',
  //  justifyContent: 'top',
  },
  headline: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFF',
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 100
  },
  headerContainer: {
    marginTop: 35,
    flex: 0.35,
    backgroundColor: '#8fbc8f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerButton: {
    backgroundColor: '#34A853',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff',
  },
  labelSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff'
  },

});

AppRegistry.registerComponent('AwesomeProject', () => App);
