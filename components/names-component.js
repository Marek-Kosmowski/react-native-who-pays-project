import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';
import { AppStyles } from '../constants/styles';

const DEFAULTS = {
  modal: false,
  inputName: '',
  names: [],
  result: '',
};

export default function NamesComponent() {
  const [state, setState] = useState(DEFAULTS);

  const handleInput = (value) => setState({ ...state, inputName: value });

  return (
    <View style={{ width: '80%' }}>
      <>
        <TextInput
          value={state.inputName}
          onChangeText={(value) => {
            handleInput(value);
          }}
          style={styles.input}
          placeholder='provide a name'
        />
        <Button title='Add name' onPress={() => Alert.alert('Hello !')} />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    fontSize: 20,
    marginBottom: 20,
    borderColor: AppStyles.color.indigoInk,
    borderWidth: 1,
    padding: 12,
    backgroundColor: AppStyles.color.white,
  },
});
