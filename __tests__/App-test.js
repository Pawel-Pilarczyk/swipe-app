/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { App } from '../src/App.tsx';

it('renders correctly', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
