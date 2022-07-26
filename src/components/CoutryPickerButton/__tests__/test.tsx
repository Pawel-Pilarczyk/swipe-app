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
  // to make this test work it is required to chenge the library as per below
  // react-native-countey-flag - index.d.ts
  //declare const CountryFlag: ({ isoCode, size, style }: Props) => JSX.Element;
  // index.js
  //   var CountryFlag = function (_a) {
  //     var isoCode = _a.isoCode, size = _a.size, style = _a.style, testID = _a.testID;
  //     // This switch case is just there because you can't name variables "in" and "do"
  //     switch (isoCode.toLowerCase()) {
  //         case "in":
  //             return react_1.default.createElement(react_native_1.Image, { source: flag["ind"], testID, style: [{ width: size * 1.6, height: size }, style] });
  //             break;
  //         case "do":
  //             return react_1.default.createElement(react_native_1.Image, { source: flag["dom"], testID,style: [{ width: size * 1.6, height: size }, style] });
  //             break;
  //         default:
  //             return (react_1.default.createElement(react_native_1.Image, { source: flag[isoCode.toLowerCase()], testID , style: [{ width: size * 1.6, height: size }, style] }));
  //             break;
  //     }
  // };
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
