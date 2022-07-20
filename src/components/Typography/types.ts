import { TextStyle } from 'react-native';
export type TSize = '8' | '10' | '12' | '14' | '16' | '18' | '22' | '28' | '32';
export type TType = 'thin' | 'normal' | 'bold';

export type TProps = {
  size?: TSize;
  type?: TType;
  style?: TextStyle | TextStyle[];
  centered?: boolean;
  capitalize?: boolean;
  color?: string;
  children: string | Element | Element[];
};
