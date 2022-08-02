import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { primary } from 'src/styles/colors';

type Props = {
  size?: number;
  style?: ViewStyle;
  color?: string;
};
export const DashedCircle = ({ size, style, color }: Props) => {
  return (
    <View
      style={[
        styles.wrapper,
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          width: size || scaling.hs(200),
          height: size || scaling.hs(200),
          borderRadius: size ? size / 2 : 100,
          borderColor: color || primary,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderStyle: 'dashed',
    zIndex: -1,
    position: 'absolute',
  },
});
