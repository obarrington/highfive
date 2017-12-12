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
    this.state = {};

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
    return (
      <View style={{flex: 1}}>
        <Button
          label={'Toggle Hand Drawing'}
          styles={{button: styles.headerButton, label: styles.labelSmall}}
          onPress={this.handDraw}
        />
        <Button
          label="Back"
          styles={{button: styles.headerButton, label: styles.labelSmall}}
          onPress={this.back}
        />
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
  labelSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#fff'
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flex: 0.35,
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
