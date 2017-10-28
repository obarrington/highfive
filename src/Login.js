import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView  } from 'react-native';
import Button from './Button';
import Container from './Container';
import  ScreenSelection  from './ScreenSelection';
import { StackNavigator } from 'react-navigation';

/*const SimpleApp = StackNavigator({
  Selection: { screen: ScreenSelection },
});*/


export default class Login extends Component {
//  constructor() {
  //  super(props);
  //  this.state = { text: 'username'};
  //}



  render() {
    //const { navigate } = this.props.navigation.navigate;
    return (
      <ScrollView style={styles.scroll}>
      <Container>
    <Text styles={{label: styles.textLabel}}>Username or Email</Text>
      <TextInput style={styles.textInput}/>
        </Container>
        <Container>
    <Text styles={{label: styles.textLabel}}>Password</Text>
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
    />
</Container>
      <View style={styles.footer}>
    <Container>
        <Button
            label="Continue"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
             //onPress={() => navigate('Selection', { user: 'Congrats!' })}
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
