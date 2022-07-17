import { RootState } from '../store';

export const getLoadingModalVisible = (state: RootState) =>
  state.modals.loadingModal;
export const getLoadingModalText = (state: RootState) =>
  state.modals.loadingModalText;
