import React from 'react';
import { View } from 'react-native';
import { CountryPickerButton } from '..';
import { render, fireEvent } from '@testing-library/react-native';

it('should render component correctly', () => {
  const btn = render(
    <CountryPickerButton
      active={false}
      code="pl"
      countryName="Poland"
      onPress={() => []}
    />,
  );
  expect(btn).toBeTruthy();
});

it('should fire the event', () => {
  const handlePress = {
    onPress: () => {},
  };
  jest.spyOn(handlePress, 'onPress');
  const btn = render(
    <View>
      <CountryPickerButton
        active={false}
        code="pl"
        countryName="Poland"
        onPress={handlePress.onPress}
        testID="btn"
      />
    </View>,
  );
  fireEvent.press(btn.getByTestId('btn'));
  expect(handlePress.onPress).toBeCalledTimes(1);
});

it('Should render a flag', () => {
  const btn = render(
    <CountryPickerButton
      active={false}
      code="pl"
      countryName="Poland"
      onPress={() => []}
    />,
  );
  const flag = btn.getByTestId('flag');
  expect(flag).toBeTruthy();
});
