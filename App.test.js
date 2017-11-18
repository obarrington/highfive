import React from 'react';
import App from './App';
import ScreenSelection from './src/ScreenSelection';
import { StackNavigator } from './react-navigation';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
