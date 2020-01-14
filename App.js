import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Ryan', id: '1'},
    { name: 'Peter', id: '2'},
    { name: 'Jane', id: '3'},
    { name: 'Michael', id: '4'},
    { name: 'Lupita', id: '5'},
    { name: 'Lio', id: '6'},
    { name: 'Koko', id: '7'},
    { name: 'Rita', id: '8'},
  ])

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>
              {item.name}
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
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
