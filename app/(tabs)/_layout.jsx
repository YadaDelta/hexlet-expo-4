import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Магазин' }} />
      <Tabs.Screen name="cart" options={{ title: 'Корзина' }} />
    </Tabs>
  );
}