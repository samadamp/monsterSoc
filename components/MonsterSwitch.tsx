import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


type Monster = {
    name: string;
    color: string;
    bio: string;
    eyes: number;
  };
  
  type MonsterSwitchProps = {
    monsters: Monster[];
    onMonsterSwitch: (monster: Monster) => void;
  };

  export function MonsterSwitch({ monsters, onMonsterSwitch }: MonsterSwitchProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välj ett monster:</Text>
      <FlatList
        data={monsters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.monsterItem}
            onPress={() => onMonsterSwitch(item)}
          >
            <Text style={styles.monsterText}>
              {item.name} ({item.color})
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  monsterItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  monsterText: {
    fontSize: 16,
  },
});
