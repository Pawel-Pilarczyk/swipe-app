import { StyleSheet, Pressable, ViewStyle } from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { greyLight, black } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';
import { Typography } from '../Typography';
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
} from 'src/assets/svg/socialMedia';

const Icons = {
  facebook: <FacebookIcon />,
  github: <GithubIcon />,
  google: <GoogleIcon />,
};

type TIcon = keyof typeof Icons;

type TProps = {
  icon: TIcon;
  onPress?: () => void;
  style?: ViewStyle | Array<ViewStyle>;
};

export const SocialMediaButton = ({ icon, onPress, style }: TProps) => {
  const opacity = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handlePress = () => {
    opacity.value = withSequence(
      withTiming(0, { duration: 100 }),
      withTiming(1, { duration: 100 }),
    );
    onPress?.();
  };
  return (
    <Animated.View style={[styles.wrapper, animatedStyles, style]}>
      <Pressable onPress={handlePress} style={styles.pressable}>
        {Icons[icon]}
        <Typography
          capitalize
          size="18"
          color={black}
          type="normal"
          style={styles.text}>
          {icon}
        </Typography>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.hs(70),
    width: '100%',
    borderRadius: scaling.hs(15),
    borderColor: greyLight,
    borderWidth: 1,
  },
  pressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '30%',
  },
  text: {
    marginLeft: scaling.hs(10),
  },
  icon: {
    marginLeft: '45%',
  },
});
