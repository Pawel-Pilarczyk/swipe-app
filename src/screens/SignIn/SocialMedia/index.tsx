import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { black, primary, white } from 'src/styles/colors';
import { SocialMediaButton } from 'src/components/SocialMediaButton';
import { Typography } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { ArrowLeft } from 'src/assets/svg';

export const SignInSocialMedia = () => {
  return (
    <View style={styles.wrapper}>
      <ArrowLeft fill={primary} />
      <Typography size="22" centered color={black} style={styles.title}>
        Let's sign you in
      </Typography>
      <SocialMediaButton icon="facebook" style={styles.button} />
      <SocialMediaButton icon="google" style={styles.button} />
      <SocialMediaButton icon="github" />
      <Typography size="16" centered color={black} style={styles.text}>
        or
      </Typography>
      <Button title="Sign in with password" />
      <View style={styles.footer}>
        <Typography size="16" color={black}>
          Don't have an account?
        </Typography>
        <Pressable>
          <Typography size="16" color={primary}>
            {' Sign up'}
          </Typography>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: scaling.hs(25),
    paddingVertical: scaling.vs(50),
  },
  title: {
    marginTop: scaling.vs(40),
    marginBottom: scaling.vs(20),
  },
  button: {
    marginBottom: scaling.vs(20),
  },
  text: {
    marginVertical: scaling.vs(35),
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
