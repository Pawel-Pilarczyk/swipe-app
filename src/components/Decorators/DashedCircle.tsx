import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { primary } from 'src/styles/colors';

type Props = {
  size?: number;
  style?: ViewStyle;
};
export const DashedCircle = ({ size, style }: Props) => {
  return (
    <View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: size || scaling.hs(200),
          height: size || scaling.hs(200),
          borderRadius: size ? size / 2 : 100,
        },
        styles.wrapper,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: primary,
    borderWidth: 2,
    borderStyle: 'dashed',
    zIndex: -1,
    position: 'absolute',
  },
});
