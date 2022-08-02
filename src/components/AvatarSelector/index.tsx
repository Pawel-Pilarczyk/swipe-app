import {
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { white, primary, greyLight } from 'src/styles/colors';
import { EditIcon, Avatar } from 'src/assets/svg';

type TProps = {
  onPress?: () => void;
  img?: string;
  style?: ViewStyle;
};

export const AvatarSelector = ({ onPress, img, style }: TProps) => {
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableHighlight
        onPress={onPress}
        style={[styles.wrapper, styles.pressable]}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} />
        ) : (
          <Avatar
            fill={white}
            width={scaling.hs(120)}
            height={scaling.hs(120)}
          />
        )}
      </TouchableHighlight>
      {onPress && (
        <View style={styles.editIconWrapper}>
          <EditIcon
            fill={white}
            width={scaling.hs(20)}
            height={scaling.hs(20)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: scaling.hs(125),
    height: scaling.hs(125),
    backgroundColor: greyLight,
    borderRadius: scaling.hs(63),
  },
  pressable: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconWrapper: {
    width: scaling.hs(25),
    height: scaling.hs(25),
    backgroundColor: primary,
    borderRadius: scaling.hs(13),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
