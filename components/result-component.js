import { Modal, StyleSheet, Text, View } from 'react-native';
import { AppStyles } from '../constants/styles';
import ButtonComponent from './ui/button-component';

export default function ResultComponent({ state, resetApp }) {
  return (
    <Modal visible={state.modal} animationType='slide'>
      <View style={styles.viewModal}>
        <Text style={styles.winnerText}>The winner is:</Text>
        <Text style={styles.resultText}>{state.result}</Text>
        <ButtonComponent
          text='Start over'
          backColor={AppStyles.color.softSilver}
          backColorPress={AppStyles.color.charcoalBlue}
          customStyle={{
            marginTop: 30,
          }}
          onPress={resetApp}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.darkNavy,
  },
  winnerText: {
    fontSize: 50,
    color: 'white',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
});
