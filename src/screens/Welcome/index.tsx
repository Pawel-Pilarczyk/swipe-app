import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'src/components/Button';
import { ROUTES } from 'src/constants/routes';

type Props = {};

export const Welcome = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome</Text>
      <Button title="Hello" onPress={() => navigation.navigate(ROUTES.HOME)} />
    </View>
  );
};

const styles = StyleSheet.create({});
