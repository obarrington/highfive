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
      prompt: "loading...",
      seconds: 120,
      timer: null

    };
    this.promptType = this.props.navigation.state.params.type;
    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen() {
    const { navigate } = this.props.navigation;
    navigate('camera');
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
      var timer = setInterval(() => {
        this.setState(previousState => {
          return { seconds: previousState.seconds - 1 };
        });
        if(this.state.seconds <= 0) {
          clearInterval(this.state.timer);
          this.nextScreen();
        }
      }, 1000);

      this.setState({timer: timer});
      // var timer = setInterval(() => {
      //   this.setState(previousState => {
      //     return { seconds: previousState.seconds - 1 };
      //   });
      // }, 1000);
      // this.setState({timer: timer});
      // setTimeout(this.nextScreen, 123000);
    });


  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    var minutes = Math.floor(this.state.seconds / 60);
    var seconds = this.state.seconds % 60;
    if(seconds < 10) {
      seconds = "0" + seconds;
    }

    return (
      <View style={this.state.style}>
        <View style={this.state.style}>
          <Text style={styles.label}>{this.state.prompt}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.timerStyle}>{minutes}:{seconds}</Text>
        </View>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
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
  timerStyle: {
    flex: 0.5,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'serif',
    fontFamily: 'Verdana',
    alignSelf: 'center',
  },
  label: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontFamily: 'Verdana',
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
});
