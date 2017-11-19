import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './LoginStyles.js'
import Button from '../Button';
import Container from '../Container';

/*const SimpleApp = StackNavigator({
  Selection: { screen: ScreenSelection },
});*/


export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onButtonPress=this.onButtonPress.bind(this);
  }

  onButtonPress() {
      const { navigate } = this.props.navigation;
      navigate('Selection');
  };

  navigateToNextScreen() {
    const { navigate } = this.props.navigation;
    navigate('Selection');
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUser.isLoggedIn){
      this.navigateToNextScreen()
    }
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <Container>
        <Text style={styles.heading}>HIGH FIVE</Text>
      </Container>
      <Container>
        <Text style={styles.textLabel}>Username or Email</Text>
        <TextInput style={styles.textInput}/>
      </Container>
      <Container>
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        />
      </Container>
      <View style={styles.footer}>
      <Container>
        <Button
            label="Login"
            styles={{button: styles.emailUsernameVerification, label: styles.buttonWhiteText}}
            onPress={this.onButtonPress}
        />
      </Container>
      <Container>
        <Button
              label="f    Login with FaceBook"
              styles={{button: styles.facebookVerification, label: styles.buttonWhiteText}}
              onPress={this.onButtonPress}
        />
      </Container>
      <Container>
        <Button
              label="g+    Login with Google"
              styles={{button: styles.googleVerification, label: styles.buttonWhiteText}}
              onPress={this.onButtonPress}
        />
      </Container>
      <Container>
        <Button
              label="Continue As Guests"
              styles={{button: styles.guestVerification, label: styles.buttonWhiteText}}
              onPress={this.props.loginAsGuest}
        />
      </Container>
      </View>
      </ScrollView>

    );
  };
}
