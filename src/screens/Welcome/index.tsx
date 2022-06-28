import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { white } from 'src/styles/colors';
import { ASYNC_STORAGE_KEYS } from 'src/constants/asyncStorageKeys';
import { PicturesCarousel } from 'src/components/PicturesCarousel';
import { Button } from 'src/components/Button';
import { scaling } from 'src/styles/scaling';

export const Welcome = () => {
  const navigation = useNavigation();
  const handleSkipPress = () => {
    navigation.navigate('SIGN_IN_SOCIAL_MEDIA');
    AsyncStorage.setItem(ASYNC_STORAGE_KEYS.LAUNCHED, 'true');
  };

  const handleIniatialLaunch = async () => {
    const launchedbefore = await AsyncStorage.getItem(
      ASYNC_STORAGE_KEYS.LAUNCHED,
    );
    if (launchedbefore) {
      navigation.navigate('SIGN_IN_SOCIAL_MEDIA');
    }
  };

  useEffect(() => {
    handleIniatialLaunch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <PicturesCarousel />
      <View style={styles.buttonWrapper}>
        <Button title="Skip" type="ghost" onPress={handleSkipPress} />
        <Button title="Next" type="default" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: scaling.vs(60),
    backgroundColor: white,
  },
  buttonWrapper: {
    marginTop: 'auto',
    marginBottom: scaling.vs(45),
    marginHorizontal: scaling.hs(10),
  },
});
