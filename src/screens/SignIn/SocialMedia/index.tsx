import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { scaling } from 'src/styles/scaling';
import { black, primary } from 'src/styles/colors';
import { SocialMediaButton } from 'src/components/SocialMediaButton';
import { Typography } from 'src/components/Typography';
import { ArrowLeft } from 'src/assets/svg';
import { Button } from 'src/components/Button';

export const SignInSocialMedia = () => {
  return (
    <View style={styles.wrapper}>
      <ArrowLeft fill={primary} />
      <Typography size="22" centered color={black}>
        Let's sign you in
      </Typography>
      <SocialMediaButton icon="facebook" />
      <SocialMediaButton icon="google" />
      <SocialMediaButton icon="github" />
      <Typography size="16" centered color={black}>
        or
      </Typography>
      <Button title="Sign in with password" />
      <Typography size="16" color={black}>
        Don't have an account?
        <Pressable>
          <Typography size="16" color={primary}>
            Sign up
          </Typography>
        </Pressable>
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaling.hs(25),
    paddingTop: scaling.vs(70),
  },
});
