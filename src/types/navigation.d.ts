import { RootStackParamList } from 'src/navigation/index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
