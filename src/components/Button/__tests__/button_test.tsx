import 'react-native';
import { View } from 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from 'src/components/Button';

it('renders correctly', () => {
  const button = render(<Button title="Test button" />);
  expect(button).toBeDefined();
});

it('Should Invoke passed function', () => {
  const handlePress = {
    onPress: () => {},
  };
  jest.spyOn(handlePress, 'onPress');
  const button = render(
    <View>
      <Button title="Test" onPress={handlePress.onPress} testID="buttonID" />
    </View>,
  );
  const pressable = button.getByTestId('buttonID');
  fireEvent.press(pressable);
  expect(handlePress.onPress).toBeCalledTimes(1);
});

it('Should Be disabled', () => {
  const Btn = render(<Button title="Test" disabled />);
  expect(Btn.container.props.disabled).toEqual(true);
});

it('Should be of type default', () => {
  const Btn = render(<Button title="Test" type="default" />);
  expect(Btn.container.props.type).toEqual('default');
});

it('Should be of type ghost', () => {
  const Btn = render(<Button title="Test" type="ghost" />);
  expect(Btn.container.props.type).toEqual('ghost');
});

it('Should render Icon', () => {
  const Btn = render(<Button title="Test" icon="fire" />);
  const icon = Btn.getByTestId('fireIcon');
  expect(icon).toBeTruthy();
});
