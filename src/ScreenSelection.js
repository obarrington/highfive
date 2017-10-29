import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';


export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onButtonPress=this.onButtonPress.bind(this);
  }

  onButtonePress(navLabel) {
      const { navigate } = this.props.navigation;
      navigate({navLabel});
  };


  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.writeContainer}>
      <Button
        style={styles.label}
        onPress={() => this.onPress('Draw')}
        >Write</Button>
      </View>
      <View style={styles.drawContainer}>
      <Button
      style={styles.label}
      onPress={() => this.onButtonPress('Write')}
      >Draw</Buttont>
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
});
