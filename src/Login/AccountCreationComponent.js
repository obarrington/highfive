import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './LoginStyles.js'
import Button from '../Button';
import Container from '../Container';
import firebase from 'firebase';

export default class AccountCreationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      loading: false,
    };
  }

submitNewUser = () => {
  this.setState({loading: true,});
  const{email, password} = this.state;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {this.setState({error:false, loading: false}); })
    .catch(() => {
      this.setState({error:true, loading: false});
      this.renderCurrState();
      })
}

renderCurrState(){
  if(this.state.loading){
    return (
      <View style ={styles.load}>
        <ActivityIndicator size = 'large'/>
      </View>
    )
  }else if (this.state.error) {
    return(
      <ScrollView style={styles.scroll}>
        <Text style ={styles.error}>Email is already registered</Text>
        <Container>
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
              label="Submit"
              styles={{button: styles.emailUsernameVerification, label: styles.buttonWhiteText}}
              onPress={this.submitNewUser}
          />
        </Container>
      </ScrollView>
    )
  }
  return(
    <ScrollView style={styles.scroll}>
      <Container>
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
      <View>
      {this.renderCurrState()}
      </View>
  );
 };
}
