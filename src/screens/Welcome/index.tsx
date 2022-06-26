import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { white } from 'src/styles/colors';
import { PicturesCarousel } from 'src/components/PicturesCarousel';
import { Button } from 'src/components/Button';
import { scaling } from 'src/styles/scaling';

export const Welcome = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <PicturesCarousel />
      <View style={styles.buttonWrapper}>
        <Button title="Skip" type="ghost" />
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
