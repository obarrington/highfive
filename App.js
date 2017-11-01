import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import ScreenSelection from './ScreenSelection';
import PromptScreen from './PromptScreen';
import { StackNavigator } from 'react-navigation';

export const BasicApp = StackNavigator({
    Main: {screen: Login},
    Selection: {screen: ScreenSelection},
    Prompt: {screen: PromptScreen},
    Write: {screen: Write}
});
export default class App extends Component {

    render() {
        return (
            <BasicApp />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
