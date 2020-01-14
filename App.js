import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Ryan')
  const [age, setAge] = useState(29)
  const [bio, setBio] = useState('I love hiking.')

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g John Doe'
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder='e.g 20'
        onChangeText={(val) => setAge(val)}
      />
      <Text>Description:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='I love swimming.'
        onChangeText={(val) => setBio(val)}
      />
      <Text>name: {name}, age: {age}</Text>
      <Text>bio: {bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
});
