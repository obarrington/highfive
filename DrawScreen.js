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
import Svg, { G, Path, Circle } from 'react-native-svg';

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
      // circlePointX: '',
      // circlePointY: '',
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
        let [x, y] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY];
        //let [x, y] = [gestureState.moveX, gestureState.moveY];
        console.log([x, y]);
        const newCurrentPoints = this.state.currentPoints;
        // const newCirclePointX = this.state.circlePointX;
        // const newCirclePointY = this.state.circlePointX;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          doneCircle: this.props.doneCircle,
          currentPoints: newCurrentPoints,
          circlePointX: x,
          circlePointY: y,
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
        //let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
        //let [x, y] = [gestureState.moveX, gestureState.moveY];
        let [x, y] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY];
        console.log([x, y]);
        const newCurrentPoints = this.state.currentPoints;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          doneCircle: this.props.doneCircle,
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
        console.log(gestureState.moveX, gestureState.moveY);
        const newPaths = this.props.donePaths;
        const newDot = this.props.doneCircle;
        let [startX, startY] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY];
        // this.setState({
        //   circlePointX: startX,
        //   circlePointY: startY
        // });
        if (this.state.currentPoints.length > 0) {
          var isPoint = true;
          const newCirclePointX = this.state.circlePointX;
          const newCirclePointY = this.state.circlePointX;
          //newCirclePoint.push({ startX, startY });
          this.state.currentPoints.forEach((point) => {
            if (startX != point.x || startY != point.y) {
              isPoint = false;
            }
          });
          // Cache the shape object so that we aren't testing
          // whether or not it changed; too many components?
          if (isPoint) {
            console.log("This is a point");
            console.log(startX);
            console.log(startY);
            console.log(this.state.circlePointX);
            console.log(this.state.circlePointY);
            newDot.push(
              <Circle
                key={this.state.currentMax}
                cx={this.state.circlePointX}
                cy={this.state.circlePointY}
                r={this.props.strokeWidth}
                fill={this.props.color}
              />
            )
          } else {
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

          console.log(this.state.reaction.pointsToSvg(this.state.currentPoints));
        }

        this.state.reaction.addGesture(this.state.currentPoints);

        this.setState({
          currentPoints: [],
          currentMax: this.state.currentMax + 1,
          circlePointX: 0,
          circlePointY: 0
        });

        this.props.setDonePaths(newPaths);
        this.props.setDoneCircles(newDot);
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
    this.state.reaction.setOffset(e.nativeEvent.layout,this.props.totalOffset);
    //this.state.reaction.setOffset(0);
  }

  // onLayout={this._onLayoutContainer}
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
                strokeWidth={this.props.strokeWidth}

                fill="none"
              />
              {this.props.doneCircle}
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
