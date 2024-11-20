import { Text, View, StyleSheet } from 'react-native';
import LanguageCard from '../../components/LanguageCard';
import { languageList } from '../../assets/languageList';

export default function MyLanguage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Мои языки программирования</Text>
      {languageList.map((language) => {
            return <LanguageCard key={language.id} languageList={language} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});