import { Pressable, StyleSheet, PressableProps } from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { black, greyLight } from 'src/styles/colors';
import { Typography } from 'src/components/Typography';

type TProps = {
  onPress: () => void;
  value: string;
};

export const DropdownItem = ({ onPress, value }: TProps & PressableProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.wrapper]}>
      <Typography size="18" type="normal" color={black}>
        {value}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.vs(55),
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: scaling.hs(20),
    borderBottomWidth: 1,
    borderColor: greyLight,
    zIndex: 999,
  },
});
