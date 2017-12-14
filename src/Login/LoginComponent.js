import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './LoginStyles.js'
import Button from '../Button';
import Container from '../Container';
import firebase from 'firebase';

/*const SimpleApp = StackNavigator({
  Selection: { screen: ScreenSelection },
});*/


export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      authenticating: false,
    };
  }

  onButtonPress = () => {
      const { navigate } = this.props.navigation;
      navigate('Creation');
  };

  navigateToNextScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Selection');
  };

  componentWillReceiveProps(nextProps) {
    console.info('LoginComponent.componentWillReceiveProps', nextProps.currentUser)
    if(nextProps.currentUser.isLoggedIn){
      this.navigateToNextScreen()
    }
  }

  submitLogin = () => {
      this.setState({authenticating: true,});
      const {email, password} = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=> {
          this.setState({authenticating: false});
          this.navigateToNextScreen()
          })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if(errorCode == 'auth/invalid-email'){
            alert('Email is not valid');
          } else if (errorCode == 'auth/user-disabled') {
            alert('Account has been disabled');
          } else if (errorCode == 'auth/user-not-found') {
            alert('Account not found');
          } else if (errorCode == 'auth/wrong-password') {
            alert('Invalid Password');
          }
          this.setState({authenticating: false});
          this.renderCurrentState();
        });
  }

  renderCurrentState(){
    if(this.state.authenticating){
      return (
        <View style={styles.load}>
          <ActivityIndicator
          style ={styles.loading}
          size = 'large'
          color = '#ff7e1c'
          />
        </View>
      )
    }
      return (
        <View>
        <Container style={styles.load}>
          <Text style={styles.heading}>HIGH FIVE</Text>
        </Container>
        <Container style={styles.load}>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            autoCorrect = {false}
            onChangeText={email => this.setState({ email })}
            value = {this.state.email}
          />
        </Container>
        <Container>
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
          secureTextEntry={true}
          autoCorrect = {false}
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value = {this.state.password}
          />
        </Container>
        <Container>
          <Button
              label="Login"
              styles={{button: styles.emailUsernameVerification, label: styles.buttonWhiteText}}
              onPress={this.submitLogin}
          />
        </Container>
        <Container>
          <Button
                label="Create New Account"
                styles={{button: styles.guestVerification, label: styles.buttonWhiteText}}
                onPress={this.onButtonPress}
          />
        </Container>
        <Container>
          <Button
                label="Continue As Guest"
                styles={{button: styles.guestVerification, label: styles.buttonWhiteText}}
                onPress={this.navigateToNextScreen}
          />
        </Container>
        </View>
      );
  }

  render() {
    return (
      <View style={styles.load}>
        {this.renderCurrentState()}
      </View>
    )
  };
}
