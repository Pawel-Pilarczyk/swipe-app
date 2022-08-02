import { Pressable, Modal, StyleSheet, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { scaling } from 'src/styles/scaling';
import {
  black,
  colorError,
  greySemiTransarent,
  greyLight,
  primary,
  primaryTransparent,
  white,
} from 'src/styles/colors';
import { Typography } from '../Typography';
import { DropdownItem } from './DropdownItem';
import { ArrowDown, ErrorIcon, CloseIcon } from 'src/assets/svg';
import { HEIGHT, WIDTH } from 'src/constants/dimentions';

type TProps = {
  data: Record<string, any>;
  diplayByValue: string;
  selectedItem: string;
  onItemPress: (d: string) => void;
  label?: string;
  error?: string;
};

export const Dropdown = ({
  data,
  diplayByValue,
  selectedItem,
  onItemPress,
  label,
  error,
}: TProps): JSX.Element => {
  const [opened, setOpened] = useState(false);

  const handleToggleOpened = () => {
    if (opened) {
      handleAnimationClose();
      setTimeout(() => setOpened(v => !v), 300);
    } else {
      setOpened(v => !v);
      handleAnimationOpen();
    }
  };

  const handlePress = (v: string) => () => {
    onItemPress(v);
    handleToggleOpened();
  };

  const widthValue = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: widthValue.value,
    };
  });

  const handleAnimationOpen = () => {
    widthValue.value = withTiming(1, { duration: 300 });
  };
  const handleAnimationClose = () => {
    widthValue.value = withTiming(0, { duration: 300 });
  };

  return (
    <View style={[styles.wrapper, error ? styles.wrapperError : null]}>
      {label && (
        <Typography color={black} size="18" style={[styles.label]}>
          {label}
        </Typography>
      )}
      <Pressable onPress={handleToggleOpened} style={styles.pressable}>
        <Typography
          size="18"
          type={selectedItem ? 'normal' : 'thin'}
          color={selectedItem ? black : greyLight}>
          {selectedItem || 'Select'}
        </Typography>
        <ArrowDown fill={primary} />
      </Pressable>
      {error ? (
        <View style={styles.error} testID="errorMessage">
          <ErrorIcon
            width={scaling.vs(20)}
            height={scaling.vs(20)}
            fill={colorError}
          />
          <Typography color={colorError} size="16">
            {error}
          </Typography>
        </View>
      ) : null}
      <Modal visible={opened} transparent>
        <Animated.View style={[styles.modalView, animatedStyles]}>
          <ScrollView style={styles.contentWrapper}>
            <Pressable onPress={handleToggleOpened}>
              <CloseIcon
                fill={black}
                width={scaling.hs(40)}
                height={scaling.hs(40)}
              />
            </Pressable>
            <Typography centered capitalize color={black} size="22">
              {label || ''}
            </Typography>
            {data.map(i => (
              <DropdownItem
                onPress={handlePress(i[diplayByValue])}
                value={i[diplayByValue]}
                key={i[diplayByValue]}
              />
            ))}
          </ScrollView>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.vs(55),
    borderRadius: scaling.vs(27),
    borderWidth: 1,
    borderColor: greyLight,
    justifyContent: 'center',
    position: 'relative',
    marginVertical: scaling.vs(35),
    backgroundColor: white,
    zIndex: 999,
  },
  wrapperError: {
    borderColor: colorError,
  },
  label: {
    position: 'absolute',
    top: scaling.vs(-35),
    left: scaling.hs(15),
  },
  pressable: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaling.hs(20),
  },
  contentWrapper: {
    width: '70%',
    maxHeight: '70%',
    backgroundColor: white,
    borderRadius: 20,
  },
  modalView: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: greySemiTransarent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    bottom: scaling.vs(-35),
    right: 0,
    paddingHorizontal: scaling.hs(20),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: primaryTransparent,
    borderRadius: scaling.vs(14),
  },
});
