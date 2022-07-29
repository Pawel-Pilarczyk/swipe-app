import { StyleSheet, View } from 'react-native';
import React from 'react';
import AvatarSelector from 'src/components/AvatarSelector';

export const UserDetails = () => {
  return (
    <View>
      <AvatarSelector
        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-wash-2-1561136582.jpg?resize=980:*"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
