import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';

export const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView style={styles.wrapper}>
      <Input
        text={text}
        type="text"
        label="Test"
        onChangeText={t => setText(t)}
        textArea
        error="er"
      />
      <Button />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
