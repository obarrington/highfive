/**
 * Created by JunjiJoo on 2017-10-31.
 */
import React { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Alert,
    AppRegistry, Platform, StyleSheet, TouchableHighlight } from 'react-native';


export default class Write extends React.Component {
    _onPressButton(){
        Alert.alert({this.promptText})
    }
    constructor(props){
        super(props);
        this.state = {text: 'Answer to the Prompt',};
        //write this.promptText wherever i want it to show up
        this.promptText = this.props.navigation.state.params.promptText;
    }
    render() {
        return (
            //should be adited
            <View style={styles.container}>
                // <View style = {styles.containerA}>
                //     <Text style = {styles.headline}>Prompt Goes Here</Text>
                // </View>
                 <View style = {styles.containerB}>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText = {(text) => this.setState({text})}
                        value = {this.state.text}
                    />
                </View>
            //button for viewing prompt for users when clicked
                <TouchableHighlight onPress={this._onPressButton} underlayColor
                    ="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>ClickForPrompt</Text>
                    </View>
                </TouchableHighlight>
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
    // containerA: {
    //     flex: 1,
    //     backgroundColor: '#8fbc8f',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
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
    },
    button: {
        marginBottom:10,
        width: 50,
        alignItems: 'center',
        backgroundColor: "#2196F3"
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }


});

AppRegistry.registerComponent('AwesomeProject', () => App);