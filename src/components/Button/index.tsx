import React from 'react';
import { StyleSheet, ViewStyle, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { FireIcon } from 'src/assets/svg';
import { primary, black, white, greyLight } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';
import { Typography } from '../Typography';

const Icons = {
  fire: <FireIcon testID="fireIcon" />,
};

type TProps = {
  title: string;
  onPress?: () => void;
  type?: 'default' | 'ghost';
  style?: ViewStyle | ViewStyle[];
  icon?: keyof typeof Icons;
  disabled?: boolean;
  testID?: string;
};

export const Button = ({
  onPress,
  title,
  type = 'default',
  style,
  icon,
  disabled = false,
  testID,
}: TProps) => {
  const opacity = useSharedValue(1);
  const animatedOpacityStyles = useAnimatedStyle(() => {
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
    <Animated.View
      style={[
        style,
        styles.wrapper,
        type === 'default' ? styles.primary : styles.ghost,
        disabled && styles.disabled,
        animatedOpacityStyles,
      ]}>
      <Pressable
        onPress={handlePress}
        style={styles.pressable}
        testID={testID}
        disabled={disabled}>
        {icon && Icons[icon]}
        <Typography
          centered
          size="18"
          color={type === 'default' ? white : black}>
          {title}
        </Typography>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.vs(55),
    borderRadius: scaling.vs(27),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  ghost: {
    backgroundColor: white,
  },
  primary: { backgroundColor: primary },
  disabled: {
    backgroundColor: greyLight,
  },
});
