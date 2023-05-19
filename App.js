import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/form';
import { Linking } from 'react-native';


export default function App() {

  const handleLinkPress = () => {
    const url = 'https://github.com/robertfullstack';

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        return Linking.openURL(url)
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleForm}>Formulário</Text>
      <StatusBar style="auto" />
      <Form />

      <Text style={styles.dono}>Feito por <Text style={styles.donoContent} onPress={handleLinkPress}>Robert</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleForm: {
    fontSize: 20,
    fontWeight: '900',
    'border-bottom': '3px solid black'
  },

  dono: {
    fontWeight: '800',
    fontSize: 18
  },

  donoContent: {
    color: 'blue',
    cursor: 'pointer'
  }
});
