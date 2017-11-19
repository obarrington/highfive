import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import Button from './Button';
import Container from './Container';
import  ScreenSelection  from './ScreenSelection';
import { StackNavigator } from 'react-navigation';
import App from './App';
/*const SimpleApp = StackNavigator({
  Selection: { screen: ScreenSelection },
});*/

const firebase = require('firebase');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
      const { navigate } = this.props.navigation;
      navigate('Selection');
  };
  createAccount(){
    console.log("email is," + this.state.email);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
  const { navigate } = this.props.navigation;
  navigate('Selection');
  };
  logIn(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
  const { navigate } = this.props.navigation;
  navigate('Selection');
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <Container>
    <Text style={styles.textLabel}>Email</Text>
      <TextInput style={styles.textInput}
      onChangeText={(text) => this.setState({email:text})}
      />
        </Container>
        <Container>
    <Text style={styles.textLabel}>Password</Text>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={(text) => this.setState({password:text})}
    />
</Container>
      <View style={styles.footer}>
    <Container>
        <Button
            label="Log in"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={() => this.logIn() }
  />
    </Container>
    <Container>
        <Button
            label="Create Account"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={() => this.createAccount() }
  />
    </Container>
    <Container>
        <Button
            label="Continue as a Guest"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={this.onButtonPress}
  />
    </Container>
    </View>
      </ScrollView>

    );
  };
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
  footer: {
    marginTop: 100
  }
});
