import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { RootRouteProps } from 'src/navigation';
import { scaling } from 'src/styles/scaling';
import { black, primary, white } from 'src/styles/colors';
import { DashedCircle } from 'src/components/Decorators/DashedCircle';
import { Typography } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { SocialMediaButton } from 'src/components/SocialMediaButton';
import { Input } from 'src/components/Input';
import { Logo } from 'src/assets/svg';

export const Login = () => {
  const { params } = useRoute<RootRouteProps<'LOG_IN'>>();
  const { type } = params;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <Logo width={scaling.hs(100)} />
        </View>
        <Typography
          centered
          color={black}
          type="bold"
          size="28"
          style={styles.title}>
          {type === 'login' ? "Let's Sign You In" : 'Create an Account'}
        </Typography>
        <Input label="Email" onChangeText={() => {}} text="" type="email" />
        <Input
          label="Password"
          onChangeText={() => {}}
          text=""
          type="password"
        />
        <Button title={type === 'login' ? ' Sign in' : ' Sign up'} />
        <Typography centered style={styles.middleText}>
          or continue with
        </Typography>
        <View style={styles.socialMediaWrapper}>
          <SocialMediaButton icon="facebook" style={styles.socialMediaButton} />
          <SocialMediaButton icon="google" />
        </View>
        <View style={styles.footer}>
          <Typography size="16" color={black}>
            {type === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </Typography>
          <Pressable>
            <Typography size="16" color={primary}>
              {type === 'login' ? ' Sign up' : ' Sign in'}
            </Typography>
          </Pressable>
        </View>
        <DashedCircle style={styles.dashedCircleOne} />
        <DashedCircle size={scaling.hs(150)} style={styles.dashedCircleTwo} />
        <DashedCircle size={scaling.hs(300)} style={styles.dashedCircleThree} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: white,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: scaling.hs(25),
    paddingVertical: scaling.vs(30),
  },
  logoWrapper: {
    alignItems: 'center',
  },
  socialMediaWrapper: {
    flexDirection: 'row',
  },
  title: {
    marginVertical: scaling.hs(20),
  },
  middleText: {
    marginVertical: scaling.vs(20),
  },
  socialMediaButton: {
    marginRight: scaling.hs(20),
  },
  footer: {
    marginTop: scaling.vs(30),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dashedCircleOne: {
    top: scaling.vs(-100),
    left: scaling.hs(-50),
  },
  dashedCircleTwo: {
    bottom: scaling.vs(100),
    left: scaling.hs(-50),
  },
  dashedCircleThree: {
    top: '30%',
    right: scaling.hs(-100),
  },
});
