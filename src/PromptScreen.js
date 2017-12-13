import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import ScreenSelection from './ScreenSelection'

const database = require('./database');

var exercisePrompt = "";

export default class PromptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: "loading..."
    };
    this.promptType = this.props.navigation.state.params.type;
    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen() {
    const { navigate } = this.props.navigation;
    navigate(this.promptType, {prompt: this.state.prompt});
  };


  componentWillMount() {
    if(this.promptType == "draw") {
      this.setState({style: styles.drawContainer});
    }
    else {
      this.setState({style: styles.writeContainer})
    }
    database.getMeAPrompt(this.promptType).then(p => {
      exercisePrompt = p;
      this.setState({ prompt: exercisePrompt });
      setTimeout(this.nextScreen, 5000);
    });
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <View style={this.state.style}>
        <Text style={styles.label}>{this.state.prompt}</Text>
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
    fontFamily: 'sans-serif',
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
});
