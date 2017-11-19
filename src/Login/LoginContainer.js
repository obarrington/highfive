import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { loginAsGuest } from '../actions/currentUserActions';

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
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default LoginContainer
