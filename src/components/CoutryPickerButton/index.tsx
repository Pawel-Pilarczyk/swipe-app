import { StyleSheet, Pressable, ViewStyle } from 'react-native';
import ReactCountryFlag from 'react-country-flag';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { scaling } from 'src/styles/scaling';
import { black, greyLight, white } from 'src/styles/colors';
import { Typography } from 'src/components/Typography';

type TProps = {
  active: boolean;
  code: string;
  countryName: string;
  onPress(): void;
  style?: ViewStyle;
  testID?: string;
};

export const SocialMediaButton = ({
  active,
  code,
  countryName,
  onPress,
  style,
  testID,
}: TProps) => {
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
      <Pressable onPress={handlePress} style={styles.pressable} testID={testID}>
        <Typography
          capitalize
          size="18"
          color={black}
          type="normal"
          style={styles.text}>
          {countryName}
        </Typography>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: scaling.hs(70),
    minHeight: scaling.hs(45),
    borderRadius: scaling.hs(15),
    borderColor: greyLight,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: white,
  },
  pressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: scaling.hs(10),
  },
});
