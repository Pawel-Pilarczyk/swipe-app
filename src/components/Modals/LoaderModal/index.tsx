import { StyleSheet, Modal, View } from 'react-native';
import React from 'react';
import { useAppSelector } from 'src/hooks/redux';
import {
  getLoadingModalText,
  getLoadingModalVisible,
} from 'src/store/modals/selectors';
import { white } from 'src/styles/colors';
import { scaling } from 'src/styles/scaling';
import { HeartsLoader } from 'src/components/HeartsLoader';
import { DashedCircle } from 'src/components/Decorators/DashedCircle';

export const LoadingModal = () => {
  const modalVisible = useAppSelector(getLoadingModalVisible);
  const modalText = useAppSelector(getLoadingModalText);
  return (
    <Modal visible={true || modalVisible} transparent>
      <View style={styles.wrapper}>
        <HeartsLoader title={modalText} />
        <DashedCircle size={scaling.hs(300)} style={styles.circleOne} />
        <DashedCircle style={styles.circleTwo} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: white,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleOne: {
    top: scaling.vs(-100),
    left: scaling.hs(-20),
  },
  circleTwo: {
    bottom: scaling.vs(-100),
    right: scaling.hs(-60),
  },
});
