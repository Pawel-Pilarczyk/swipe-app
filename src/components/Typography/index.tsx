import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { TProps, TType } from './types';
import { scaling } from 'src/styles/scaling';

export const Typography = ({
  size = '12',
  children,
  capitalize,
  centered,
  color,
  style,
  type = 'normal',
}: TProps) => {
  return (
    <Text
      style={[
        style,
        styles.text,
        typeStyles[type],
        {
          fontSize: scaling.hs(+size),
          color: color,
        },
        centered && styles.textCentered,
      ]}>
      {capitalize && typeof children === 'string'
        ? children.toUpperCase()
        : children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 0,
    margin: 0,
  },
  textCentered: {
    textAlign: 'center',
  },
});

const typeStyles: Record<TType, TextStyle> = {
  bold: {
    fontWeight: '800',
  },
  normal: {
    fontWeight: '500',
  },
  thin: {
    fontWeight: '300',
  },
};
