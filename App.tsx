import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddMonster } from './components/AddMonster';
import { MonsterSwitch } from './components/MonsterSwitch';
import { View, Text, StyleSheet } from 'react-native';

type Monster = {
  name: string;
  color: string;
  bio: string;
  eyes: number;
};

const Stack = createStackNavigator();

function Feed({ route }: any) {
  const { monster } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed för {monster.name}</Text>
      <Text>Här kan du lägga till inlägg, likes, och kommentarer i framtiden!</Text>
    </View>
  );
}

export default function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddMonster">
      <Stack.Screen name="AddMonster">
  {(props) => (
    <AddMonster {...props} monsters={monsters} setMonsters={setMonsters} />
  )}
</Stack.Screen>
<Stack.Screen name="MonsterSwitch">
  {(props) => (
    <MonsterSwitch
      {...props}
      monsters={monsters}
      onMonsterSwitch={(monster) =>
        props.navigation.navigate('Feed', { monster })
      }
    />
  )}
</Stack.Screen>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
