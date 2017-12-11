import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Container from './Container';
import Button from './Button';

export default class EndScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.prompt = this.props.navigation.state.params.prompt;

    this.continue=this.continue.bind(this);
    this.playAgain=this.playAgain.bind(this);
    this.saveWork=this.saveWork.bind(this);
    this.shareWork=this.shareWork.bind(this);
  }

  continue() {
    const { navigate } = this.props.navigation

    //navigate('write', {prompt: this.state.prompt});
    navigate('write', {prompt: this.state.prompt});
  }

  playAgain() {
    const {navigate} = this.props.navigation;

    navigate('Selection');
  }

  saveWork() {
    xs
  }

  shareWork() {

  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.continueContainer}>
        <Button
          label="Continue Working"
          styles={{button: styles.primaryButton, label:styles.label}}
          onPress={this.continue}
        />
        </View>
        <View style={styles.playAgainContainer}>
        <Button
            label="Play Again"
            styles={{button: styles.primaryButton, label:styles.label}}
            onPress={this.playAgain}
        />
        </View>
        <View style={styles.saveContainer}>
          <Button
          label="Save Work"
          styles={{button: styles.primaryButton, label:styles.label}}
          onPress={this.saveWork}
          />
        </View>
        <View style={styles.shareContainer}>
          <Button
          label="Share Work"
          styles={{button: styles.primaryButton, label:styles.label}}
          onPress={this.shareWork}
          />
        </View>
      </View>
  );
};
}
  const styles = StyleSheet.create({
    continueContainer: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    shareContainer: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveContainer: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playAgainContainer: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily: 'Verdana',
      color: '#fff',
    }
});