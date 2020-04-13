import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#85c861" />
      <View style={styles.container}> 
        <Text style={styles.title}>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85c861',
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
