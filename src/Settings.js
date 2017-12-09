import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';

const settings = require('./settingSettings');


export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 120
    };

    //this.handDraw = this.handDraw.bind(this);
    this.back = this.back.bind(this);
  }

  handDraw() {
    settings.toggleHandDraw();
    console.log(settings.getMeHandDraw());
  }

  back() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    var minutes = Math.floor(this.state.timer / 60);
    var seconds = this.state.timer % 60;
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Button
            label="Back"
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.back}
          />
        </View>
        <View style={styles.settingsContainer}>
          <Text style={styles.labelSmall}>Timer: {minutes}:{seconds} </Text>
          <View style={styles.slider}>
            <Slider
              value={this.state.timer}
              onValueChange={value => this.setState({ timer: value })}
              minimumValue={30}
              maximumValue={120}
              step={30}
              minimumTrackTintColor='#FFF'
              maximumTrackTintColor='#FFF'
              thumbTintColor='#34A853'
            />
          </View>
          <Button
            label={'Toggle Hand Drawing'}
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.handDraw}
          />
        </View>
      </View>
  );

};
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: '#75c68b',
  },
  slider: {
    alignItems: 'stretch',
    marginLeft: 15,
    marginRight: 25
  },
  label: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff',
  },
  labelSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flex: 0.18,
    backgroundColor: '#75c68b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerButton: {
    backgroundColor: '#34A853',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
  },
});
