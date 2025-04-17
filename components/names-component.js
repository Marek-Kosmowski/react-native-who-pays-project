import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Keyboard,
  FlatList,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { AppStyles } from '../constants/styles';

import ButtonComponent from './ui/button-component';

const DEFAULTS = {
  modal: false,
  inputName: '',
  names: [],
  result: '',
};

export default function NamesComponent() {
  const [state, setState] = useState(DEFAULTS);

  const handleInput = (value) => setState({ ...state, inputName: value });
  const handleState = (props) => setState({ ...state, ...props });

  const addNamesToList = () => {
    const userName = state.inputName;
    const validate = validateHandler(userName);

    if (!validate.error) {
      /// ADD NAME TO ARRAY
      handleState({
        names: [...state.names, userName],
        inputName: '',
      });

      Keyboard.dismiss();
    } else {
      /// SHOW ERROR
      Alert.alert(validate.message);
    }
  };

  const validateHandler = (value) => {
    if (value === '') {
      return { error: true, message: `Sorry, name can't be empty.` };
    }

    if (state.names.includes(value)) {
      return { error: true, message: 'Sorry, name already exist.' };
    }
    return true;
  };

  return (
    <View style={{ width: '80%' }}>
      {/* INPUT BUTTON */}

      <>
        <TextInput
          value={state.inputName}
          onChangeText={(value) => {
            handleInput(value);
          }}
          style={styles.input}
          placeholder='provide a name'
        />
        {/* <Button title='Add name' onPress={() => Alert.alert('Hello !')} /> */}
        <ButtonComponent
          backColor={AppStyles.color.indigoInk}
          backColorPress={AppStyles.color.prussianBlue}
          text='Add name'
          onPress={() => addNamesToList()}
        />
        {/* NAMES LIST */}
        {state.names && (
          <FlatList
            data={state.names}
            renderItem={({ item, index }) => {
              return (
                <Pressable>
                  <Text>{item}</Text>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item}
          />
        )}
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
