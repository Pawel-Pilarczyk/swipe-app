import { StyleSheet, Modal, View } from 'react-native';
import React from 'react';
import { useAppSelector } from 'src/hooks/redux';
import {
  getLoadingModalText,
  getLoadingModalVisible,
} from 'src/store/modals/selectors';
import { white, primary } from 'src/styles/colors';
import { Typography } from 'src/components/Typography';
import { HeartsLoader } from 'src/components/HeartsLoader';

export const LoadingModal = () => {
  const modalVisible = useAppSelector(getLoadingModalVisible);
  const modalText = useAppSelector(getLoadingModalText);
  return (
    <Modal visible={true || modalVisible} transparent>
      <View style={styles.wrapper}>
        <HeartsLoader />
        <Typography capitalize color={primary} size="28">
          {modalText}
        </Typography>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: white,
  },
});
