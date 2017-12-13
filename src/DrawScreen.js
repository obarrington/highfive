import React, { Component } from 'react';
import { Text, View, StyleSheet, PanResponder, Platform } from 'react-native';
import { Constants } from 'expo';
import Reaction from './Reaction';
import Svg, { G, Path, Circle } from 'react-native-svg';

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
        this.sendOffset(evt.nativeEvent.pageX-evt.nativeEvent.locationX, evt.nativeEvent.pageY-evt.nativeEvent.locationY);
        let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
        const newCurrentPoints = this.state.currentPoints;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          doneCircle: this.props.doneCircle,
          currentPoints: newCurrentPoints,
          circlePointX: x - (evt.nativeEvent.pageX-evt.nativeEvent.locationX),
          circlePointY: y - (evt.nativeEvent.pageY-evt.nativeEvent.locationY),
          currentMax: this.state.currentMax
        });
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        let [x, y] = [gestureState.moveX, gestureState.moveY];
        const newCurrentPoints = this.state.currentPoints;
        newCurrentPoints.push({ x, y });

        this.setState({
          donePaths: this.props.donePaths,
          doneCircle: this.props.doneCircle,
          currentPoints: newCurrentPoints,
          currentMax: this.state.currentMax
        });
        return true;

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        const newDrawing = this.props.donePaths;
        let [startX, startY] = [gestureState.moveX, gestureState.moveY];
        if (this.state.currentPoints.length > 0) {
          var isPoint = true;
          this.state.currentPoints.forEach((point) => {
            if (startX != point.x || startY != point.y) {
              isPoint = false;
            }
          });
          if (isPoint) {
            newDrawing.push(
              <Circle
                key={this.state.currentMax}
                cx={this.state.circlePointX}
                cy={this.state.circlePointY}
                r={this.props.strokeWidth}
                fill={this.props.color}
              />
            )
          } else {
            newDrawing.push(
              <Path
                key={this.state.currentMax}
                d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color}
                strokeWidth={this.props.strokeWidth}
                fill="none"
              />
            );
          }


        }

        this.state.reaction.addGesture(this.state.currentPoints);

        this.setState({
          currentPoints: [],
          currentMax: this.state.currentMax + 1,
        });

        console.log(newDrawing);

        this.props.setDonePaths(newDrawing);

        return true;
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        return true;
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  sendOffset(xOff, yOff) {
    this.state.reaction.setOffset(xOff, yOff)
  }

  render() {
    return (
      <View

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
              <Path
                key={this.state.currentMax}
                d={this.state.reaction.pointsToSvg(this.state.currentPoints)}
                stroke={this.props.color}
                strokeWidth={this.props.strokeWidth}

                fill="none"
              />
              {this.props.donePaths}

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
