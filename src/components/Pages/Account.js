import React from 'react';
import { ScrollView, Text,StyleSheet } from 'react-native';

export default function Account (){
  return (
    <ScrollView style={styles.container}>
      <Text>test</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  contact: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  phone: {
    marginTop:50,
    fontSize: 16,
    color: '#FF0000',
    textAlign: 'center',
    fontWeight:'bold',
  },

});
