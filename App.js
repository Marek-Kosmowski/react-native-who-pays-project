import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Background from './assets/background/background-image.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import NamesComponent from './components/names-component';
import { AppStyles } from './constants/styles';





export default function App() {
  return (
    <ImageBackground
      source={Background}
      resizeMode='cover'
      style={styles.container}
    >
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Ionicons
          name='cash-outline'
          size={120}
          color={AppStyles.color.indigoInk}
        />
        <NamesComponent />
        <StatusBar style='dark' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
});
