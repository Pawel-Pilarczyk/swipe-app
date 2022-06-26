import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { scaling } from 'src/styles/scaling';
import { black, greyLight, primary } from 'src/styles/colors';
import { WIDTH } from 'src/constants/dimentions';
import { Typography } from '../Typography';

const data = [
  {
    img: require('src/assets/img/face1.jpg'),
    titlePartOne: 'Find people who ',
    titleMiddle: 'match',
    titleEnd: ' with you',
  },
  {
    img: require('src/assets/img/face2.jpg'),
    titlePartOne: 'Easily ',
    titleMiddle: 'message & call',
    titleEnd: ' the people you like',
  },
  {
    img: require('src/assets/img/face3.jpg'),
    titlePartOne: "Don't wait anymore, find out your ",
    titleMiddle: 'soulmate',
    titleEnd: ' now',
  },
];

export const PicturesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scalingPictureOneValue = useSharedValue(1);
  const scalingPictureOneStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalingPictureOneValue.value }],
    };
  });

  const scalingPictureTwoValue = useSharedValue(0.8);
  const scalingPictureTwoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalingPictureTwoValue.value }],
    };
  });

  const scalingPictureThreeValue = useSharedValue(0.8);
  const scalingPictureThreeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalingPictureThreeValue.value }],
    };
  });

  return (
    <View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={WIDTH / 2 + scaling.hs(60)}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const currentOffset = event.nativeEvent.contentOffset.x;
          if (currentOffset < scaling.hs(200)) {
            setActiveIndex(0);
            scalingPictureOneValue.value = withTiming(1, { duration: 200 });
            scalingPictureTwoValue.value = withTiming(0.8, { duration: 300 });
          }
          if (
            currentOffset >= scaling.hs(200) &&
            currentOffset <= scaling.hs(360)
          ) {
            setActiveIndex(1);
            scalingPictureOneValue.value = withTiming(0.8, { duration: 300 });
            scalingPictureTwoValue.value = withTiming(1, { duration: 200 });
            scalingPictureThreeValue.value = withTiming(0.8, { duration: 300 });
          }
          if (currentOffset > scaling.hs(360)) {
            setActiveIndex(2);
            scalingPictureThreeValue.value = withTiming(1, { duration: 200 });
            scalingPictureTwoValue.value = withTiming(0.8, { duration: 300 });
          }
        }}>
        {data.map((item, index) => (
          <View>
            <Animated.Image
              source={item.img}
              style={[
                styles.image,
                index === 0
                  ? [scalingPictureOneStyle, styles.imageOne]
                  : index === 1
                  ? scalingPictureTwoStyle
                  : [scalingPictureThreeStyle, styles.imageThree],
              ]}
              key={index}
            />
          </View>
        ))}
      </ScrollView>
      <Typography
        centered
        color={black}
        size="28"
        type="bold"
        style={styles.text}>
        {data[activeIndex].titlePartOne}
        <Typography
          centered
          color={primary}
          size="28"
          type="bold"
          style={styles.text}>
          {data[activeIndex].titleMiddle}
        </Typography>
        {data[activeIndex].titleEnd}
      </Typography>
      <View style={styles.dotsWrapper}>
        <View
          style={[
            styles.dot,
            activeIndex === 0 ? styles.dotActive : styles.dotInactive,
          ]}
        />
        <View
          style={[
            styles.dot,
            activeIndex === 1 ? styles.dotActive : styles.dotInactive,
          ]}
        />
        <View
          style={[
            styles.dot,
            activeIndex === 2 ? styles.dotActive : styles.dotInactive,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: scaling.hs(280),
    height: scaling.vs(380),
    borderRadius: scaling.s(20),
  },
  imageOne: {
    marginLeft: (WIDTH - scaling.hs(280)) / 2,
  },
  imageThree: {
    marginRight: (WIDTH - scaling.hs(280)) / 2,
  },
  text: {
    marginHorizontal: scaling.hs(45),
    marginTop: scaling.vs(100),
  },
  dotsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaling.vs(40),
  },
  dot: {
    width: scaling.vs(15),
    height: scaling.vs(15),
    borderRadius: scaling.vs(8),
    marginHorizontal: scaling.hs(5),
  },
  dotActive: {
    backgroundColor: primary,
  },
  dotInactive: {
    backgroundColor: greyLight,
  },
});
