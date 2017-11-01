import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';
//import ScreenSelection from './ScreenSelection'


export default class PromptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  this.onButtonPress=this.onButtonPress.bind(this)
  }

  onButtonPress() {
      const { navigate } = this.props.navigation;

      navigate('Draw');
  };



  render() {
    return (
      <View style={{flex: 1}}>
        <Text>We did it!</Text>
        <View style={styles.drawContainer}>
        
      <Button
        label="Draw",
        styles={{button: styles.primaryButton, label:styles.label}},
        onPress={this.onButtonPress}
        />
        </View>
      </View>
    );
  };
}
const styles = StyleSheet.create({
    drawContainer: {
      flex: 1,
      //backgroundColor: '#34A853',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 50,
      fontWeight: 'bold',
      //fontFamily: 'Verdana',
      color: '#fff',
    },
     primaryButton: {
      backgroundColor: 'transparent',
    },
  });