import {
  StyleSheet,
  View,
  TextInput,
  KeyboardTypeOptions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
  greyLight,
  black,
  colorError,
  primaryTransparent,
  primary,
} from 'src/styles/colors';
import { Typography } from '../Typography';
import { scaling } from 'src/styles/scaling';
import { ErrorIcon, EyeClosed, EyeOpened } from 'src/assets/svg';

type TType = 'email' | 'text' | 'number' | 'phone' | 'password';
type TProps = {
  text: string;
  type: TType;
  onChangeText: (s: string) => void;
  label: string;
  error?: string;
  maxLenght?: number;
};

const keyboardType: Record<TType, KeyboardTypeOptions> = {
  email: 'email-address',
  text: 'default',
  number: 'numeric',
  password: 'default',
  phone: 'number-pad',
};

export const Input = ({
  onChangeText,
  text,
  type,
  error,
  label,
  maxLenght,
}: TProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => setPasswordVisible(v => !v);
  return (
    <View style={[styles.wrapper, error ? styles.wrapperError : {}]}>
      <Typography color={black} size="18" style={[styles.label]}>
        {label}
      </Typography>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder={label}
        secureTextEntry={type === 'password' && !passwordVisible}
        style={[styles.input, error ? styles.inputError : {}]}
        keyboardType={keyboardType[type]}
        maxLength={maxLenght}
      />
      {type === 'password' ? (
        <Pressable onPress={toggleVisibility} style={styles.eyeIcon}>
          {passwordVisible ? (
            <EyeOpened fill={primary} width={scaling.hs(25)} />
          ) : (
            <EyeClosed fill={primary} width={scaling.hs(25)} />
          )}
        </Pressable>
      ) : null}
      {error ? (
        <View style={styles.error}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: scaling.vs(55),
    borderRadius: scaling.vs(27),
    borderWidth: 1,
    borderColor: greyLight,
    position: 'relative',
    marginVertical: scaling.vs(40),
    flex: 1,
  },
  wrapperError: {
    borderColor: colorError,
  },
  input: {
    padding: 0,
    width: '100%',
    height: '100%',
    marginHorizontal: scaling.hs(15),
  },
  inputError: {
    color: colorError,
  },
  eyeIcon: {
    position: 'absolute',
    right: scaling.hs(20),
    top: scaling.vs(6),
  },
  label: {
    position: 'absolute',
    top: scaling.vs(-35),
    left: scaling.hs(15),
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
