import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Typography } from '../Typography';
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
} from 'src/assets/svg/socialMedia';

type TIcons = 'facebook' | 'google' | 'github';

const Icon: Record<TIcons, Element> = {
  facebook: <FacebookIcon />,
  github: <GithubIcon />,
  google: <GoogleIcon />,
};

type TIcon = keyof typeof Icon;

type TProps = {
  title: string;
  icon: TIcon;
};

export const SocialMediaButton = ({ icon }: TProps) => {
  return (
    <Pressable>
      {Icon[icon]}
      <Typography capitalize>{icon}</Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
