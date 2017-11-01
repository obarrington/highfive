import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';
import ScreenSelection from './ScreenSelection'


export default class PromptScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};


        this.onButtonPress=this.onButtonPress.bind(this)
    }

    onButtonPress() {
        const { navigate } = this.props.navigation;

        navigate('Write');
    };



    render() {
        return (

            <View style={styles.backgroundColor}>
                <Text>We did it!</Text>

                    <Button
                        label="Write"
                        styles={{button: styles.primaryButton, label:styles.label}}
                        onPress={this.onButtonPress}
                    />
            </View>
        );
    };
}
const styles = StyleSheet.create({
    backgroundColor: {
        flex: 1,
        backgroundColor: '#75c68b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: 'transparent',
        height: 50,
        width: 100,
    },
    label: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        color: '#fff',
    },
});
