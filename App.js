import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Ryan', key: 1},
    { name: 'Peter', key: 2},
    { name: 'Jane', key: 3},
    { name: 'Michael', key: 4},
    { name: 'Lupita', key: 5},
    { name: 'Lio', key: 6},
    { name: 'Koko', key: 7},
    { name: 'Rita', key: 8},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
              </Text>
            </View>
            )
          )
        }
      </ScrollView>
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
