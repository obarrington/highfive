import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import Container from './Container';

export default class ScreenSelection extends Component {

  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.writeContainer}>
      <Text style={styles.label}>Write</Text>
      </View>
      <View style={styles.drawContainer}>
      <Text style={styles.label}>Draw</Text>
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
