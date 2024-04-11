import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image } from 'react-native';
import { styles } from '../css/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Napoleão Bonaparte(Adriano Elias Daniel)</Text>
      <Image style={styles.imagens}
          source={require('../../assets/napoleao.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
