import React from 'react';
import { render } from '@testing-library/react-native';
import { Typography } from '..';

it('Should render correctly', () => {
  const Typo = render(<Typography>Test</Typography>);
  expect(Typo).toBeTruthy();
});

it('Should capitalize text', () => {
  const Typo = render(<Typography capitalize>test</Typography>);
  expect(Typo.container.props.capitalize).toBeTruthy();
});
