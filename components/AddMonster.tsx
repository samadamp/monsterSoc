import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Monster = {
    name: string;
    color: string;
    bio: string;
    eyes: number;
  };

  type AddMonsterProps = {
    monsters: Monster[];
    setMonsters: React.Dispatch<React.SetStateAction<Monster[]>>;
  };

export function AddMonster({ monsters, setMonsters }: AddMonsterProps) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [bio, setBio] = useState('');
  const [eyes, setEyes] = useState('');
  const navigation = useNavigation<any>();

  const handleMonsterSwitch = () => {
    navigation.navigate('MonsterSwitch'); 
  };

  const handleAddMonster = () => {
    if (!name || !color || !bio || !eyes || isNaN(Number(eyes))) {
      alert('Vänligen fyll i alla fält korrekt!'); 
      return;
    }
  
    const newMonster = { name, color, bio, eyes: Number(eyes) };
    setMonsters([...monsters, newMonster]); 
    setName(''); 
    setColor('');
    setBio('');
    setEyes('');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Namn:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ange namn"
      />
      <Text style={styles.label}>Färg:</Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={setColor}
        placeholder="Ange färg"
      />
      <Text style={styles.label}>Bio:</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        placeholder="Ange bio"
        multiline
      />
      <Text style={styles.label}>Ögon:</Text>
      <TextInput
        style={styles.input}
        value={eyes}
        onChangeText={setEyes}
        placeholder="Ange antal ögon"
        multiline
       
      />
      <Button title="Lägg till Monster" onPress={handleAddMonster} />

     
      <FlatList
        data={monsters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.monsterItem}>
            <Text style={styles.monsterText}>
              {item.name} ({item.color}): {item.bio} {item.eyes}
            </Text>
          </View>
        )}
      />
    <Button title="Byt konto" onPress={handleMonsterSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  monsterItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  monsterText: {
    fontSize: 16,
  },
});
