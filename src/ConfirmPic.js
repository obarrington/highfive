import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from './Button';

export default class GalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.picture = this.props.navigation.state.params.data;
    this.back = this.back.bind(this);
    this.end = this.end.bind(this);
  }

  back() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  end() {
    const { navigate } = this.props.navigation;

    navigate('end', {results: this.picture});
  };

  componentDidMount() {
    // FileSystem.readDirectoryAsync(
    //   FileSystem.documentDirectory + 'photos'
    // ).then(photos => {
    //   this.setState({
    //     photos,
    //   });
    // });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#8fbc8f',
      }}>
        <View style={styles.header}>
          <Button
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.back}
            label = "Retake Picture"
          />
          <Button
            styles={{button: styles.headerButton, label: styles.labelSmall}}
            onPress={this.end}
            label = "To End Screen"
          />
        </View>
        <View
          style={{
            flex: 4,
        }}>
          <ScrollView contentComponentStyle={{ flex: 1 }}>
            <View style={styles.pictures}>
                <Image
                  style={styles.picture}
                  source={{
                    uri: this.picture.uri,
                  }}
                />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  pictures: {
    flex: 1,
  },
  picture: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 5,
    resizeMode: 'contain',
  },
  button: {
    padding: 20,
    marginBottom: 4,
    backgroundColor: 'green',
    fontFamily: 'serif',
    fontFamily: 'Verdana',
    alignSelf: 'center',
  },
  labelSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontFamily: 'Verdana',
    color: '#fff'
  },
  headerButton: {
    backgroundColor: '#34A853',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
  },
  header: {
    marginTop: 25,
    backgroundColor: '#8fbc8f',
  }
});
