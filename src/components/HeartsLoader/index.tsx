import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SIZE, positions } from './data';
import { primary } from 'src/styles/colors';
import { HeartIcon } from 'src/assets/svg';

type TProps = {
  style?: ViewStyle | Array<ViewStyle>;
};

export const HeartsLoader = ({ style }: TProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleAnimation = () => {
    scale.value = withSequence(
      withTiming(1.1, { duration: 50 }),
      withTiming(1, { duration: 50 }),
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleAnimation();
      setActiveIndex(v => (v < 11 ? ++v : 0));
    }, 100);
    return () => clearInterval(interval);
  });
  return (
    <View style={[styles.heartsWrapper, style]}>
      {positions.map((item, index) => (
        <Animated.View
          key={item.rotation}
          style={index === activeIndex && animatedStyles}>
          <HeartIcon
            fill={primary}
            style={[
              {
                left: item.posx,
                top: item.posy,
                transform: [{ rotate: `${item.rotation}deg` }],
              },
              styles.heart,
            ]}
          />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heartsWrapper: {
    position: 'relative',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
  heart: {
    position: 'absolute',
  },
});
