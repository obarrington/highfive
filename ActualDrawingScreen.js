import React from 'react';
import { Dimensions, View,
         Text, StyleSheet } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import Colors from './Colors';
import DrawScreen from './DrawScreen.js';
import Header from './Header';
import ColorSelector from './ColorSelector';
import ResultImages from './ResultImages';

export default class ActualDrawingScreen extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      results: [],
      color: Colors.color16,
      strokeWidth: 4,
      donePaths: []
    };

    this._undo = this._undo.bind(this);
    this._setDonePaths = this._setDonePaths.bind(this);
  }

  _cancel = () => {
    this.setState({ donePaths: [] });
  }

  _undo = () => {
    this.setState({ donePaths: this.state.donePaths.slice(0, -1) });
  }

  _save = async () => {
    const result = await takeSnapshotAsync(
      this._signatureView,
      { format: 'png', result: 'base64', quality: 1.0 }
    );

    const results = this.state.results;
    results.push(result);

    this.setState({ results });
  }

  _setDonePaths = (donePaths) => {
    this.setState({ donePaths });
  }

  _changeColor = (color) => {
    this.setState({ color });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          save={this._save}
          undo={this._undo}
          cancel={this._cancel}
        />

        <View style={{ alignItems: 'center' }}>
          <DrawScreen
            ref={(view) => { this._signatureView = view; }}
            donePaths={this.state.donePaths}
            setDonePaths={this._setDonePaths}
            containerStyle={{ backgroundColor: '#FFF', marginTop: 10 }}
            width={Dimensions.get('window').width - 20}
            height={Dimensions.get('window').width - 20}
            color={this.state.color}
            strokeWidth={this.state.strokeWidth}
          />
        </View>
        <ColorSelector onPress={this._changeColor} />

        <ResultImages images={this.state.results} />


      </View>
    );
  }
}

DrawScreen.route = {
  navigationBar: {
    visible: false
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

  footer: {
    color: '#555',
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    right: 10
  }
});
