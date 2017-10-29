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

    //this.onDrawPress=this.onDrawPress.bind(this);
    //this.onWritePress=this.onWritePress.bind(this)
  }

//  onDrawPress() {
    //  const { navigate } = this.props.navigation;

    //  navigate('Draw');
//  };
  //onWritePress() {
    //  const { navigate } = this.props.navigation;

      //navigate('Write');
  //};


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
    primaryButton: {
      backroundColor: 'transparent',
    },
});
