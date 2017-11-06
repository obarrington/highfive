import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';

const ReactDOM = require('react-dom');
const LC = require('literallycanvas');



export default class DrawScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }
    
    render() {
        return (<LC.LiterallyCanvasReactComponent imageURLPrefix="/build/lc-assets/img" />);
    }
};


//ReactDOM.render(<DrawScreen />, document.getElementById('litcanvasID'));


/*
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';
//This is straight from literallycanvas. should produce the basic canvas
//const React = require('react');
const ReactDOM = require('react-dom');
const LC = require('literallycanvas');


const MyApp = React.createClass({
    render: function() {
        return <LC.LiterallyCanvasReactComponent imageURLPrefix="/build/lc-assets/img" />;
    }
});


ReactDOM.render(<MyApp />, document.getElementById('main'));


*/


/*
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
import Button from './Button';
import App from './App';

const LC = require('literallycanvas');

export default class DrawScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
      
    LC.init(document.getElementsByID('my-drawing')[0]);
  }

     render() {
    return (
      <div class="my-drawing"></div>
  );
}; 
    
};

//class LiterallyCanvas('my-drawing', opt){};





  const styles = StyleSheet.create({

});
*/
