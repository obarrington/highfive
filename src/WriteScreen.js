/**
* Created by JunjiJoo on 2017-10-31.
*/
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from '../App';


export default class Write extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Write Answer to the Prompt',
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
        <View style={styles.header}>
          <Button
            label="View Prompt"
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.viewPrompt}
          />
        </View>
        <View style={styles.timer}>
          <Text>{this.state.seconds}</Text>
          </View>
        <View style = {styles.containerA}>
          <Text style = {styles.headline}>Prompt Goes Here</Text>
        </View>
        <View style = {styles.containerB}>
          <TextInput
            style = {styles.textInput}
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text}
          />
        </View>
        <View style={styles.footer}>
          <Container>
            <Button
              label="Continue"
              styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
              onPress={this.nextScreen}
            />
          </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    marginTop: 35
  },
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerA: {
    flex: 1,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 100
  },
  headerContainer: {
    flex: 0.35,
    backgroundColor: '#75c68b',
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
