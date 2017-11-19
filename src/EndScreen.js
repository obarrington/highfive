import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';


export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.returnToSelection = this.returnToSelection.bind(this);
  }


  returnToSelection() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Selection'})
      ],
      key: null
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.Container}>
        <Text style={styles.label}>End Screen Placeholder</Text>
        <Button
          label="Back to Selection Screen"
          styles={{button: styles.button, label: styles.labelSmall}}
          onPress={this.returnToSelection}
        />
      </View>
    </View>
  );

};
}
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      backgroundColor: '#34A853',
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#fff',
    },
    label: {
      fontSize: 25,
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
});
