import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { white } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { Dropdown } from 'src/components/Dropdown';
import AvatarSelector from 'src/components/AvatarSelector';

const mockedData = [
  {
    key: 'male',
    value: 'Male',
  },
  {
    key: 'female',
    value: 'Female',
  },
  {
    key: 'genderFluid',
    value: 'Gender Fluid',
  },
];

export const UserDetails = () => {
  const [gender, setGender] = useState('');

  const handleDropdownSelect = (v: string) => {
    setGender(v);
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.avatarWrapper}>
        <AvatarSelector img="" onPress={() => {}} />
      </View>
      <Input label="Full Name" type="text" onChangeText={() => {}} text="" />
      <Input label="Email" type="email" onChangeText={() => {}} text="" />
      <Input
        label="Phone Number"
        type="email"
        onChangeText={() => {}}
        text=""
      />
      <Dropdown
        data={mockedData}
        diplayByValue="value"
        onItemPress={handleDropdownSelect}
        selectedItem={gender}
        label="Gender"
      />
      <Input label="Location" type="text" onChangeText={() => {}} text="" />
      <Button title="Continue" style={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: scaling.vs(20),
    paddingHorizontal: scaling.hs(20),
    backgroundColor: white,
  },
  button: {
    marginVertical: scaling.vs(40),
  },
  avatarWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
