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

  render() {
    return (
      <ScrollView style={styles.scroll}>
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

      <Button
            label="Continue"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={this.onButtonPress}
      />

      </View>
      </ScrollView>

    );
  };
}
