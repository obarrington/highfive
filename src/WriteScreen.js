/**
 * Created by JunjiJoo on 2017-10-31.
 */
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';


export default class Write extends React.Component {
    constructor(props){
        super(props);
        this.state = {text: 'Write Answer to the Prompt',};
        this.promptText = this.props.navigation.state.params.promptText;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.containerA}>
                    <Text style = {styles.headline}>{this.promptText}</Text>
                </View>
                <View style = {styles.containerB}>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText = {(text) => this.setState({text})}
                        value = {this.state.text}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8fbc8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerA: {
        flex: 1,
        backgroundColor: '#8fbc8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerB: {
        flex: 3,
        backgroundColor: '#8fbc8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 300,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'black',
    }


});

AppRegistry.registerComponent('AwesomeProject', () => App);
