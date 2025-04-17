import { Modal, Text } from 'react-native';

export default function ResultComponent({ state, resetApp }) {
  return (
    <Modal visible={state.modal} animationType='slide'>
      <Text>{state.result}</Text>
    </Modal>
  );
}
