import React, {useState} from 'react';
import {StyleSheet, Text, ViewStyle, Pressable} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type TProps = {
  title: string;
  onPress?: () => void;
  type: 'default' | 'ghost';
  styles?: ViewStyle | ViewStyle[];
};

export const Button = ({onPress, title, type, styles}: TProps) => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(true);
    onPress?.();
  };

  const handlePressOut = () => setPressed(false);

  return (
    <Pressable onPress={handlePress} onPressOut={handlePressOut}>
      <Animated.View>
        <Text>index</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
