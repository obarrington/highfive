import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';


export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};


    this.write=this.write.bind(this);
    this.draw=this.draw.bind(this);
  }

  write() {
      const { navigate } = this.props.navigation;

      navigate('Prompt', {type: "write"});
  };

  draw() {
      const { navigate } = this.props.navigation;

      navigate('Prompt', {type: "draw"});
  };




  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.writeContainer}>
      <Button
        label="Write"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.write}
        />
      </View>
      <View style={styles.drawContainer}>
      <Button
        label="Draw"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.draw}
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
