import React from 'react';
import App from './App';
import { StackNavigator } from 'react-navigation';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const navigation = { navigate: jest.fn() };
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
