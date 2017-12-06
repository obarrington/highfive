import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Container from './Container';
import Button from './Button';

const database = require('./database');
export default class ScreenSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: database.getUserData(),
    };
    this.back = this.back.bind(this);
    this.logout = this.logout.bind(this);

  }

  getUserData() {
    var user = {};
    user = database.getUser();
  }  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.


  back() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  logout() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Button
          label="Back"
          styles={{button: styles.headerButton, label: styles.labelSmall}}
          onPress={this.back}
        />
        <Button
          label="Profile Settings"
          styles={{button: styles.headerButton, label: styles.labelSmall}}
          onPress={this.logout}
        />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>this.state.user.name</Text>
      </View>
      <View style={styles.historyContainer}>
        <Text style={styles.label}>this.state.user.history</Text>
      </View>
    </View>
  );

};
}
  const styles = StyleSheet.create({
    profileContainer: {
      flex: .65,
      backgroundColor: '#75c68b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    historyContainer: {
      flex: 1,
      backgroundColor: '#34A853',
      alignItems: 'center',
      justifyContent: 'center',
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
