import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import Button from './src/Button';
import Container from './src/Container';

export default class Login extends Component {
//  constructor() {
  //  super(props);
  //  this.state = { text: 'username'};
  //}
  press(){

  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
      </ScrollView>
      <Container>
    <Text styles={{label: styles.textLabel}}>Username or Email<Text/>
      <TextInput
        style={styles.textInput}
        />
        </Container>
        <Container>
    <Text styles={{label: styles.textLabel}>Password<Text/>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
    />
</Container>
      <View style={styles.footer}>
    <Container>
        <Button
            label="Sign In"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={this.press.bind(this)} />
    </Container>
    </View>
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
