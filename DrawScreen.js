// import React, { Component } from "react";
// import { Button, View } from "react-native";
// import Container from "./Container";
// import RNDraw from "rn-draw";
// import { FileSystem, takeSnapshotAsync } from "expo";
//
//
//
// export default class DigitalTouch extends Component {
//   componentDidMount() {
//       FileSystem.makeDirectoryAsync(
//         FileSystem.documentDirectory + "photos"
//       ).catch(e => {
//         console.log(e, "Directory exists");
//       });
//     }
//
//     saveDrawingToImage = async () => {
//       const img = await takeSnapshotAsync(this.drawingView, {
//         format: "png",
//         result: "base64",
//         width: 100,
//         height: 100
//       });
//       console.log(img); // spits out the base 64 of the image
//     };
//
//     render() {
//       return (
//         <Container>
//           <Button
//             style={{ position: "absolute", top: 20, left: 20 }}
//             onPress={this.saveDrawingToImage}
//             title="SAVE DRAWING"
//           />
//           <View
//             style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }}
//             ref={view => (this.drawingView = view)}
//           >
//             <RNDraw
//               containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
//               color={"#000000"}
//               strokeWidth={4}
//             />
//           </View>
//         </Container>
//       );
//     }
// }

import React, { Component } from 'react';
import { Text, View, StyleSheet, PanResponder } from 'react-native';
import { Constants } from 'expo';
import Reaction from './Reaction';
import Svg, { G, Path } from 'react-native-svg';

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Button,
//   Image,
//   Modal,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   PanResponder, // we want to bring in the PanResponder system
//   Animated,
//   Dimensions,
// } from 'react-native';
// import RNDraw from "rn-draw";
// import Container from "./Container";
// import Expo, { Constants, GLView } from "expo";
//
// import Svg, { G, Path } from 'react-native-svg';
// import Reaction from './Reaction';
//
// console.disableYellowBox = true;

// var React = require('react-native');
//
// var {
//   View,
//   Component,
//   } = React;

//var SignaturePad = require('react-native-signature-pad');

export default class DigitalTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMax: 0,
      currentPoints: [],
      reaction: new Reaction()
    };
    _panResponder = {
      panHandlers: null
    }
  }


  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('onTouch');
        let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
        console.log([x, y]);
        const newCurrentPoints = this.state.currentPoints;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          currentPoints: newCurrentPoints,
          currentMax: this.state.currentMax
        });
        //console.log(this.props.donePaths);
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
        console.log("Touch");
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('onMove');
        let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
        console.log([x, y]);
        const newCurrentPoints = this.state.currentPoints;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          currentPoints: newCurrentPoints,
          currentMax: this.state.currentMax
        });
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        console.log("Moving");
        // console.log(evt.identifier);
        // console.log(evt.locationX, evt.locationY);
        // console.log(evt.pageX, evt.pageY);
        // console.log(evt.target);
        console.log(gestureState.moveX, gestureState.moveY);

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log("onResponderRelease");
        console.log(this.props.donePaths);
        const newPaths = this.props.donePaths;
        if (this.state.currentPoints.length > 0) {
          // Cache the shape object so that we aren't testing
          // whether or not it changed; too many components?
          newPaths.push(
            <Path
              key={this.state.currentMax}
              d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
              stroke={this.props.color}
              strokeWidth={this.props.strokeWidth}
              fill="none"
            />
          );
        }

        this.state.reaction.addGesture(this.state.currentPoints);

        this.setState({
          currentPoints: [],
          currentMax: this.state.currentMax + 1
        });

        this.props.setDonePaths(newPaths);
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  // render() {
  //   return (
  //     <View {...this._panResponder.panHandlers} style={styles.container}>
  //     </View>
  //   );
  // }
  _onLayoutContainer = (e) => {
    this.state.reaction.setOffset(e.nativeEvent.layout);
  }
  render() {
    return (
      <View
        onLayout={this._onLayoutContainer}
        style={[
          styles.drawContainer,
          this.props.containerStyle,
          { width: this.props.width, height: this.props.height }
        ]}
      >
        <View {...this._panResponder.panHandlers} style={styles.container}>
          <Svg
            style={styles.drawSurface}
            width={this.props.width}
            height={this.props.height}
          >
            <G>
              {this.props.donePaths}
              <Path
                key={this.state.currentMax}
                d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color}
                strokeWidth={this.props.strokeWidth - 1}
                strokeOpacity={0.5}
                fill="none"
              />
            </G>
          </Svg>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       currentMax: 0,
//       currentPoints: [],
//       reaction: new Reaction()
//     };
//   _panResponder = {
//     panHandlers: null
//   }
//
//
//   }
//   componentWillMount() {
//     // this._panResponder = PanResponder.create({
//     //   onStartShouldSetPanResponder: (evt, gs) => true,
//     //   onMoveShouldSetPanResponder: (evt, gs) => true,
//     //   onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
//     //   onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
//     //   onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
//     // });
//     this._panResponder = PanResponder.create({
//       // Ask to be the responder:
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
//
//       onPanResponderGrant: (evt, gestureState) => {
//         console.log('Touch');
//         this.onTouch(evt);
//         // The gesture has started. Show visual feedback so the user knows
//         // what is happening!
//
//         // gestureState.d{x,y} will be set to zero now
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         console.log('Mvng');
//         this.onTouch(evt);
//         // The most recent move distance is gestureState.move{X,Y}
//
//         // The accumulated gesture distance since becoming responder is
//         // gestureState.d{x,y}
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         console.log("onResponderRelease");
//         const newPaths = this.props.donePaths;
//         if (this.state.currentPoints.length > 0) {
//           // Cache the shape object so that we aren't testing
//           // whether or not it changed; too many components?
//           newPaths.push(
//             <Path
//               key={this.state.currentMax}
//               d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
//               stroke={this.props.color}
//               strokeWidth={this.props.strokeWidth}
//               fill="none"
//             />
//           );
//         }
//
//         this.state.reaction.addGesture(this.state.currentPoints);
//
//         this.setState({
//           currentPoints: [],
//           currentMax: this.state.currentMax + 1
//         });
//
//         this.props.setDonePaths(newPaths);
//         // The user has released all touches while this view is the
//         // responder. This typically means a gesture has succeeded
//       },
//       onShouldBlockNativeResponder: (evt, gestureState) => {
//         // Returns whether this component should block native components from becoming the JS
//         // responder. Returns true by default. Is currently only supported on android.
//         return true;
//       },
//     });
//   }
//
//   onTouch(evt) {
//     console.log('onTouch');
//     let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
//     const newCurrentPoints = this.state.currentPoints;
//     newCurrentPoints.push({ x, y });
//
//     this.setState({
//       donePaths: this.props.donePaths,
//       currentPoints: newCurrentPoints,
//       currentMax: this.state.currentMax
//     });
//   }
//
//   // onResponderGrant(evt) {
//   //   this.onTouch(evt);
//   // }
//
//   // onResponderMove(evt) {
//   //   this.onTouch(evt);
//   // }
//
//   // onResponderRelease() {
//   //   console.log("onResponderRelease");
//   //   const newPaths = this.props.donePaths;
//   //   if (this.state.currentPoints.length > 0) {
//   //     // Cache the shape object so that we aren't testing
//   //     // whether or not it changed; too many components?
//   //     newPaths.push(
//   //       <Path
//   //         key={this.state.currentMax}
//   //         d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
//   //         stroke={this.props.color}
//   //         strokeWidth={this.props.strokeWidth}
//   //         fill="none"
//   //       />
//   //     );
//   //   }
//   //
//   //   this.state.reaction.addGesture(this.state.currentPoints);
//   //
//   //   this.setState({
//   //     currentPoints: [],
//   //     currentMax: this.state.currentMax + 1
//   //   });
//   //
//   //   this.props.setDonePaths(newPaths);
//   // }
//
//   _onLayoutContainer = (e) => {
//     this.state.reaction.setOffset(e.nativeEvent.layout);
//   }
//
//   render() {
//     return (
//       <View {...this._panResponder.panHandlers} />
//     );
//     // return (
//     //   <View
//     //     onLayout={this._onLayoutContainer}
//     //     style={[
//     //       styles.drawContainer,
//     //       this.props.containerStyle,
//     //       { width: this.props.width, height: this.props.height }
//     //     ]}
//     //   >
//     //
//     //     <View {...this._panResponder.panHandlers}>
//     //       <Svg
//     //         style={styles.drawSurface}
//     //         width={this.props.width}
//     //         height={this.props.height}
//     //       >
//     //         <G>
//     //           {this.props.donePaths}
//     //           <Path
//     //             key={this.state.currentMax}
//     //             d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
//     //             stroke={this.props.color}
//     //             strokeWidth={this.props.strokeWidth - 1}
//     //             strokeOpacity={0.5}
//     //             fill="none"
//     //           />
//     //         </G>
//     //       </Svg>
//     //
//     //       {this.props.children}
//     //     </View>
//     //   </View>
//     // );
//   }
// }
//
// const styles = StyleSheet.create({
//   drawContainer: {
//     borderWidth: 1,
//     borderRadius: 2,
//     borderColor: '#ddd',
//     borderBottomWidth: 0,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 1
//   },
//
//   drawSurface: {
//     backgroundColor: 'transparent'
//   }
// });
//
// AppRegistry.registerComponent('DigitalTouch', () => DigitalTouch);

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
