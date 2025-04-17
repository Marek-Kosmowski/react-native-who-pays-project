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
import ResultComponent from './result-component';

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

  const removeName = (index) => {
    let names = state.names;

    names.splice(index, 1);

    handleState({
      names,
    });
  };

  const getRandomName = () => {
    return state.names[Math.floor(Math.random() * state.names.length)];
  };

  const showResult = () => {
    let name = getRandomName();
    handleState({
      modal: true,
      result: name,
    });
  };

  const resetApp = () => {
    setState(DEFAULTS);
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
            style={styles.listContainer}
            data={state.names}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={styles.nameItem}
                  onPress={() => removeName(index)}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item}
          />
        )}
        {/* GENERATE RESULT BUTTON */}
        {state.names.length > 1 && (
          <ButtonComponent
            backColor={AppStyles.color.indigoInk}
            backColorPress={AppStyles.color.prussianBlue}
            text='Pick a name'
            onPress={() => showResult()}
          />
        )}
      </>
      <ResultComponent state={state} resetApp={resetApp} />
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
  nameItem: {
    borderColor: AppStyles.color.indigoInk,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 7,
    alignItems: 'center',
  },
  itemText: {
    padding: 10,
    fontSize: 25,
  },
  listContainer: {
    marginBottom: 20,
    maxHeight: 300,
  },
});
