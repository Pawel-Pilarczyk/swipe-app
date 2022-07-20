import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '..';

it('Input Should render Correctly', () => {
  const input = render(
    <Input label="test" onChangeText={() => {}} text="" type="text" />,
  );
  expect(input).toBeTruthy();
});

it('Should change the textValue', () => {
  let text = '';
  const input = render(
    <Input
      label="test"
      onChangeText={t => (text = t)}
      text={text}
      type="text"
      testID="inpID"
    />,
  );
  fireEvent.changeText(input.getByTestId('inpID'), '123');
  expect(text).toMatch('123');
});

it('Should secure password input', () => {
  const inp = render(
    <Input
      label="test"
      onChangeText={() => {}}
      text=""
      type="password"
      testID="inpTestID"
    />,
  );
  expect(inp.getByTestId('inpTestID').props.secureTextEntry).toBeTruthy();
});

it('Should show errorMessage when Wrong error Present', () => {
  const inp = render(
    <Input
      label="test"
      onChangeText={() => {}}
      text=""
      type="password"
      testID="inpTestID"
      error="Test Error"
    />,
  );
  expect(inp.getByTestId('errorMessage')).toBeTruthy();
});
