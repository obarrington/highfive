import React, { Component } from 'react';
import Sketch from 'react-native-sketch';
import {
  AppRegistry,
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class DigitalTouch extends Component {
  state = {
    color: '#FFFFFF',
    path: null,
  };

  onColorChange = (color) => {
    this.setState({ color });
  };

  onChange = () => {
    console.log('onChange event'); // eslint-disable-line no-console
  };

  clear = () => {
    this.sketch.clear();
  };

  save = () => {
    this.sketch.save().then(({ path }) => {
      this.setState({ path });
    });
  };

  renderColorButton = (color) => {
    const active = color === this.state.color;

    return (
      <TouchableOpacity
        onPress={() => this.onColorChange(color)}
        style={[
          styles.colorButton,
          {
            backgroundColor: active ? '#000' : color,
            borderColor: color,
          },
        ]}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.state.path ? 'default' : 'light-content'} />
        <View style={styles.colorsBar}>
          {this.renderColorButton('#20BBFC')}
          {this.renderColorButton('#2DFD2F')}
          {this.renderColorButton('#FD28F9')}
          {this.renderColorButton('#EA212E')}
          {this.renderColorButton('#FD7E24')}
          {this.renderColorButton('#FFFA38')}
          {this.renderColorButton('#FFFFFF')}
        </View>
        <Sketch
          fillColor="#000"
          imageType="png"
          onChange={this.onChange}
          ref={(sketch) => {
            this.sketch = sketch;
          }}
          strokeColor={this.state.color}
          strokeThickness={3}
          style={styles.sketch}
        />
        <View style={styles.actionsBar}>
          <Button color="#EA212E" onPress={this.clear} title="❌ Clear" />
          <Button color="#1DBD21" onPress={this.save} title="Save  ✅" />
        </View>
        <Modal animationType="slide" visible={!!this.state.path}>
          <View style={styles.modal}>
            <Text style={styles.title}>Here is the image you created.</Text>
            <Image
              resizeMode="contain"
              source={{ uri: `file://${this.state.path}` }}
              style={styles.image}
            ></Image>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
    paddingTop: 20,
  },
  colorsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  colorButton: {
    borderRadius: 50,
    borderWidth: 8,
    width: 25,
    height: 25,
  },
  sketch: {
    borderRadius: 20,
    margin: 20,
  },
  actionsBar: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  modal: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    flex: 1,
  },
  title: {
    color: '#333333',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    margin: 20,
  },
});

AppRegistry.registerComponent('DigitalTouch', () => DigitalTouch);

/*
import React, {Component} from 'react';
//import { StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from './Container';
//import Button from './Button';
import App from './App';
import Sketch from 'react-native-sketch';

//import React, { Component } from 'react';
//import Sketch from 'react-native-sketch';
import { AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class Basic extends Component {
  clear = () => {
    this.sketch.clear();
  };

  save = () => {
    this.sketch.save().then(({ path }) => {
      console.log(`The image is saved there: ${path}`); // eslint-disable-line no-console
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Sketch
          ref={sketch => {
            this.sketch = sketch;
          }}
        />
        <View style={styles.actionsBar}>
          <Button color="#EA212E" onPress={this.clear} title="❌ Clear" />
          <Button color="#1DBD21" onPress={this.save} title="Save  ✅" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 20,
  },
  actionsBar: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

AppRegistry.registerComponent('Basic', () => Basic);

*/







/*import SketchView from 'react-native-sketch-view';

const sketchViewConstants = SketchView.constants;

const tools = {};

tools[sketchViewConstants.toolType.pen.id] = {
    id: sketchViewConstants.toolType.pen.id,
    name: sketchViewConstants.toolType.pen.name,
    color: 'black',
    nextId: sketchViewConstants.toolType.eraser.id
};
tools[sketchViewConstants.toolType.eraser.id] = {
    id: sketchViewConstants.toolType.eraser.id,
    name: sketchViewConstants.toolType.eraser.name,
    nextId: sketchViewConstants.toolType.pen.id
};



class HandNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toolSelected: sketchViewConstants.toolType.pen.id
        };
    }

    isEraserToolSelected() {
        return this.state.toolSelected === sketchViewConstants.toolType.eraser.id;
    }

    toolChangeClick() {
        this.setState({toolSelected: tools[this.state.toolSelected].nextId});
    }

    getToolName() {
        return tools[this.state.toolSelected].name;
    }

    onSketchSave(saveEvent) {
        this.props.onSave && this.props.onSave(saveEvent);
    }
    
    //can we add an option to change pen color?

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <SketchView style={{flex: 1, backgroundColor: 'white'}} ref="sketchRef" 
                selectedTool={this.state.toolSelected} 
                onSaveSketch={this.onSketchSave.bind(this)}
                localSourceImagePath={this.props.localSourceImagePath}/>
				
                <View style={{ flexDirection: 'row', backgroundColor: '#EEE'}}>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, alignItems: 'center', paddingVertical:20 }} onPress={() => { this.refs.sketchRef.clearSketch() }}>
                        <Text style={{color:'#888',fontWeight:'600'}}>CLEAR</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, alignItems: 'center', paddingVertical:20, borderLeftWidth:1, borderRightWidth:1, borderColor:'#DDD' }} onPress={() => { this.refs.sketchRef.saveSketch() }}>
                        <Text style={{color:'#888',fontWeight:'600'}}>SAVE</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor:this.isEraserToolSelected() ? "#CCC" : "rgba(0,0,0,0)" }} onPress={this.toolChangeClick.bind(this)}>
						<Text style={{color:'#888',fontWeight:'600'}}>ERASER</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default HandNote;*/