import { StackNavigator } from 'react-navigation';
import Login from './Login';
import ScreenSelection from './ScreenSelection';
import PromptScreen from './PromptScreen';
import WriteScreen from './WriteScreen';
import DrawScreen from './DrawScreen';


export const AppNavigation = StackNavigator({
  Main: {screen: Login},
  Selection: {screen: ScreenSelection},
  Prompt: {screen: PromptScreen},
  draw: {screen: DrawScreen},
  wrie: {screen: WriteScreen},
});

//eslint-disable-next-line no-unused-vars
const AppNavigationContainer = (state) => (
  <AppNavigation state />
);

export default connect(state => state)(AppNavigationContainer);
