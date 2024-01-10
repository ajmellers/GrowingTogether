import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

export default function ForSwapScreen() {
  const handlePress = (link) => {
    Linking.openURL(link);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item.link)}>
      <Text style={styles.buttonText}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Seeds', link: 'https://www.seedswappers.co.uk/' },
          { key: 'Food', link: 'https://www.freecycle.org/browse/UK' },
          { key: 'Advice', link: 'https://www.gardenersworld.com/how-to/' },
          { key: 'Help', link: 'https://www.rhs.org.uk/advice/gardening-basics/getting-started-with-gardening' },
          { key: 'Tools', link: 'https://www.gumtree.com/for-sale/uk/gardening-tools' },
        ]}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  list: {
    paddingHorizontal: 16,
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
  }
});