import { StyleSheet, Pressable } from 'react-native';
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
};

export const SocialMediaButton = ({ icon, onPress }: TProps) => {
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
    <Animated.View style={[styles.wrapper, animatedStyles]}>
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
    flex: 1,
    maxHeight: scaling.hs(70),
    borderRadius: scaling.hs(15),
    borderColor: greyLight,
    borderWidth: 1,
  },
  pressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: scaling.hs(10),
  },
});
