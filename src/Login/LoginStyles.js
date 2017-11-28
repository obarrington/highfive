import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scroll: {
    backgroundColor: '#52ffa9',
    padding: 10,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 30,
    fontSize: 30,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 50,
    fontWeight: '900',
    color: '#FFF',
    textAlign: 'center',
    padding: 10
  },
  textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#FFF',
    },
    buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856',
},
emailUsernameVerification: {
    backgroundColor: '#aae0d5',
},
facebookVerification: {
    backgroundColor: '#3B5998',
},
googleVerification: {
    backgroundColor: '#d34836',
},
guestVerification: {
    backgroundColor: '#52ffa9',
},
footer: {
   marginTop: 10
}
});
