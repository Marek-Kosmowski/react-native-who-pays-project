import { Text, Pressable, StyleSheet, Alert } from 'react-native';
import { AppStyles } from '../../constants/styles';

export default function ButtonComponent(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonStyle,
        { backgroundColor: pressed ? props.backColorPress : props.backColor },
      ]}
      {...props}
    >
      <Text style={{ fontSize: 20, color: '#fff' }}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: AppStyles.color.indigoInk,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
});
