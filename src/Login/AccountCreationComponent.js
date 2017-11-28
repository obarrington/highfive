import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './LoginStyles.js'
import Button from '../Button';
import Container from '../Container';
import firebase from 'firebase';
// import LoginComponent from './LoginComponent';

export default class AccountCreationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  navigateToNextScreen() {
    const { navigate } = this.props.navigation;
    navigate('Selection');
  };

submitNewUser = () => {
  this.setState({loading: true,});
  const{email, password} = this.state;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.navigateToNextScreen()
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/weak-password') {
        alert('The Password is too weak.');
      } else if (errorCode == 'auth/invalid-email') {
        alert('Email is invalid');
      } else if (errorCode == 'auth/email-already-in-use') {
        alert('Account already exists with this email');
      }
    this.setState({loading: false});
    this.renderCurrState();
    })
}

renderCurrState(){
  if(this.state.loading){
    return (
      <View>
        <ActivityIndicator
        style = {styles.loading}
        color = '#ff7e1c'
        size = "large"
        />
      </View>
    )
  }
  return(
    <ScrollView>
      <Container>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={false}
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
            label="Submit"
            styles={{button: styles.emailUsernameVerification, label: styles.buttonWhiteText}}
            onPress={this.submitNewUser}
        />
      </Container>
    </ScrollView>
  )
}

  render() {
    return (
      <View style={styles.load}>
      {this.renderCurrState()}
      </View>
  );
 };
}
