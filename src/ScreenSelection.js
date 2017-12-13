import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';


const firebase = require('firebase');

const settings = require('./settingSettings');
export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHandDraw: false
    };


    this.write = this.write.bind(this);
    this.draw = this.draw.bind(this);
    this.profile = this.profile.bind(this);
    this.settings = this.settings.bind(this);

    // this.set(isHandDraw: false)
    // this.watchKeys(isHandDraw, this.setState({isHandDraw: true}))
    console.log(settings.getMeHandDraw());
  }

  write() {
      const { navigate } = this.props.navigation;
      if (settings.getMeHandDraw() == false) {
        navigate('Prompt', {type: "write"});
      } else {
        navigate('HandDraw', {type: "write"})
      }
  };

  draw() {
      const { navigate } = this.props.navigation;
      if (settings.getMeHandDraw() == false) {
        navigate('Prompt', {type: "draw"});
      } else {
        navigate('HandDraw', {type: "draw"})
      }

  };

  profile() {
    const { navigate } = this.props.navigation;

    navigate('Profile');
  };

  settings() {
    const { navigate } = this.props.navigation;

    navigate('Settings', {type: this.state.isHandDraw});

  };

  render() {
    let button = null;
    if(firebase.auth().currentUser == null){
      button =   <Button styles={styles.hide}/>;
      console.log("null!");
    }
    else {
      button =  <Button
                label="Profile"
                styles={{button: styles.headerButton, label: styles.labelSmall}}
                onPress={this.profile}
              />;
     console.log(firebase.auth().currentUser);
    }
    return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        {button}
        <Button
          label="Settings"
          styles={{button: styles.headerButton, label: styles.labelSmall}}
          onPress={this.settings}
        />
      </View>
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
      fontFamily: 'sans-serif','Verdana',
      color: '#fff',
    },
    labelSmall: {
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'sans-serif','Verdana',
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
    hide: {
      opacity: 1,
    },

});
