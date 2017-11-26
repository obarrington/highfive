import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';


export default class EndScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onButtonPress=this.onButtonPress.bind(this)
    }

    onButtonPress() {
        const { navigate } = this.props.react-navigation

        navigate('Prompt');
    }

    render() {
        return (
            <View style={{flex: 1}}>
    <View style={styles.continueContainer}>
    <Button
        label="Continue Working"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
    />
    </View>
        <View style={styles.playAgainContainer}
    <Button
        label="Play Again"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
    />
    </View>
        <View style={styles.saveContainer}
    <Button
        label="Save Work"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
    />
    </View>
        <View style={styles.shareContainer}
    <Button
        label="Share Work"
        styles={{button: styles.primaryButton, label:styles.label}}
        onPress={this.onButtonPress}
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