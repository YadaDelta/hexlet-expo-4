import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>О Себе</Text>
      <Text style={styles.text}>Hi!</Text>
      <Text style={styles.text}>My name is</Text>
      <Text style={styles.text}>Яшин Даниил</Text>
      <Link href="/myLanguage" style={styles.button}>
        Мои языки программирования
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
