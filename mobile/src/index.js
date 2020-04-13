import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './service/api';

// import { Container } from './styles';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#85c861" />
      <SafeAreaView style={styles.container} >
        <FlatList        
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85c861',
  },

  project: {
    color: '#fff',
    fontSize: 30,
  },
});
