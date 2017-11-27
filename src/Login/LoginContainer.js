import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { loginAsGuest, loginUser, newUser } from '../actions/currentUserActions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    navigation: ownProps.navigation,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginAsGuest: () => {
      dispatch(loginAsGuest())
    },
    onLoginUser: (user) => {
      dispatch(loginUser(firebase.auth.currentUser()))
    },
    onNewUser: () => {
      dispatch(newUser())
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default LoginContainer
