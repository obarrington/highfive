import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';
import ScreenSelection from './ScreenSelection'


export default class PromptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  //  this.onButtonPress=this.onButtonPress.bind(this)
  }

//  onButtonPress() {
    //  const { navigate } = this.props.navigation;

    //  navigate('PromptScreen');
//  };



  render() {
    return (
      <Text>We did it!</Text>
    );
  };
}
const styles = StyleSheet.create({
  });
