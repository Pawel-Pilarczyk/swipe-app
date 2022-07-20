import 'react-native';
import { View } from 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SocialMediaButton } from 'src/components/SocialMediaButton';

it('Should render correctly', () => {
  const Btn = render(<SocialMediaButton icon="facebook" />);
  expect(Btn).toBeTruthy();
});

it('Should Fire event once pressed', () => {
  const handleEvent = {
    onPress() {},
  };
  jest.spyOn(handleEvent, 'onPress');
  const Btn = render(
    <View>
      <SocialMediaButton
        icon="facebook"
        onPress={handleEvent.onPress}
        testID="test"
      />
      ,
    </View>,
  );
  const pressable = Btn.getByTestId('test');
  fireEvent.press(pressable);
  expect(handleEvent.onPress).toBeCalledTimes(1);
  fireEvent.press(pressable);
  expect(handleEvent.onPress).toBeCalledTimes(2);
});

it('Should render icon correctly', () => {
  const Btn = render(
    <View>
      <SocialMediaButton icon="facebook" testID="test" />,
    </View>,
  );
  const Icon = Btn.getByTestId('fb');
  expect(Icon).toBeTruthy();
});
