import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';


export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};


    this.onButtonPress=this.onButtonPress.bind(this)
  }

  onButtonPress() {
      const { navigate } = this.props.navigation;

      navigate('Prompt');
  };



  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.writeContainer}>
      <Button
        label="Write"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
        />
      </View>
      <View style={styles.drawContainer}>
      <Button
        label="Draw"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
        />

      </View>
    </View>
  );

};
}
  const styles = StyleSheet.create({
    writeContainer: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawContainer: {
      flex: 1,
      backgroundColor: '#34A853',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily: 'Verdana',
      color: '#fff',
    },
    primaryButton: {
      backgroundColor: 'transparent',
    },
});
