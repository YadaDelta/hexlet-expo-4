import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'О Себе' }} />
      <Tabs.Screen name="myLanguage" options={{ title: 'Мои языки программирования' }} />
    </Tabs>
  );
}