import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const EndButton = (props) => {

    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={[styles.label, props.styles.label]}>{props.label}</Text>
    }

    return (
        <TouchableHighlight
            underlayColor="#ccc"
            onPress={props.onPress}
            style={[
                props.noDefaultStyles ? '' : styles.button,
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    label: {
      fontSize: 24
    }
});

export default EndButton;