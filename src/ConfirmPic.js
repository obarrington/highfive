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
import { FileSystem } from 'expo';

export default class GalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.picture = this.props.navigation.state.params.data;
    this.nextScreen = this.nextScreen.bind(this);
    this.back = this.back.bind(this);
    this.end = this.end.bind(this);
  }

  nextScreen() {
    const { navigate } = this.props.navigation;
    navigate('end');
  };

  back() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  end() {
    const { navigate } = this.props.navigation;

    navigate('end');
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
      }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'transparent',
            flexDirection: 'row',
        }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this.back}>
            <Text>Retake Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this.end}>
            <Text>To End Screen</Text>
          </TouchableOpacity>
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
  backButton: {
    padding: 20,
    marginBottom: 4,
    backgroundColor: 'green',
  },
});
