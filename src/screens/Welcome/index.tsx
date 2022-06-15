import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from 'src/hooks/redux';
import { getName } from 'src/store/user/selectors';
import { Button } from 'src/components/Button';
import { ROUTES } from 'src/constants/routes';

export const Welcome = () => {
  const name = useAppSelector(getName);
  const navigation = useNavigation();
  return (
    <View>
      <Text>{name}</Text>
      <Button
        title="Hello"
        onPress={() => navigation.navigate({ key: ROUTES.HOME })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
