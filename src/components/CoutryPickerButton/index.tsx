import { StyleSheet, Pressable, ViewStyle, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import CountryFlag from 'react-native-country-flag';
import { scaling } from 'src/styles/scaling';
import { black, greyLight, primary, white } from 'src/styles/colors';
import { Typography } from 'src/components/Typography';

type TProps = {
  active: boolean;
  code: string;
  countryName: string;
  onPress(): void;
  style?: ViewStyle;
  testID?: string;
};

export const CountryPickerButton = ({
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
    <Animated.View
      style={[styles.wrapper, animatedStyles, style, active && styles.active]}>
      <Pressable onPress={handlePress} style={styles.pressable} testID={testID}>
        <View style={styles.textWrapper}>
          <CountryFlag isoCode={code} size={scaling.hs(25)} />
          <Typography style={styles.middleText}>{code}</Typography>
          <Typography capitalize size="18" color={black} type="normal">
            {countryName}
          </Typography>
        </View>
        <View style={[styles.circle, active && styles.circleActive]}>
          {active && <View style={styles.innerCircle} />}
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.hs(70),
    paddingHorizontal: scaling.hs(20),
    borderRadius: scaling.hs(15),
    marginVertical: scaling.vs(10),
    borderColor: greyLight,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: white,
  },
  pressable: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  middleText: {
    marginHorizontal: scaling.hs(20),
  },
  active: {
    borderColor: primary,
  },
  circle: {
    width: scaling.hs(20),
    height: scaling.hs(20),
    borderRadius: scaling.hs(10),
    borderWidth: 2,
    borderColor: greyLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    borderColor: primary,
  },
  innerCircle: {
    width: scaling.hs(10),
    height: scaling.hs(10),
    borderRadius: scaling.hs(5),
    backgroundColor: primary,
  },
});
