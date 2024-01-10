import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Switch } from 'react-native-paper';

export default function MyAreaScreen() {
  const [plantName, setPlantName] = useState('');
  const [numPlanted, setNumPlanted] = useState('');
  const [plantList, setPlantList] = useState([]);

  const addPlant = () => {
    setPlantList([...plantList, { plant: plantName, numPlanted: numPlanted, watered: false }]);
    setPlantName('');
    setNumPlanted('');
  };

  const toggleWatered = (index) => {
    const newList = [...plantList];
    newList[index].watered = !newList[index].watered;
    setPlantList(newList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter plant name and number planted:</Text>
      <TextInput
        placeholderTextColor="black"
        placeholder="   Plant name"
        style={styles.input}
        onChangeText={text => setPlantName(text)}
        value={plantName}
      />
      <TextInput
        placeholderTextColor="black"
        placeholder="   Number planted"
        style={styles.input}
        onChangeText={text => setNumPlanted(text)}
        value={numPlanted}
      />
     <Pressable style={styles.button} onPress={addPlant}>
      <Text style={styles.buttonText}>Add Plant</Text>
    </Pressable>
      <Text style={styles.listTitle}>Plant list:</Text>
      <FlatList
        data={plantList}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Switch value={item.watered} onValueChange={() => toggleWatered(index)} />
            <Text style={styles.listItemText}>{item.plant} ({item.numPlanted})</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  
  
  
  
  
  
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  listTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  listItemText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
});
