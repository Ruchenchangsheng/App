import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';

export default function AboutUs() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Welcome to our hotel booking service
      </Text>
      <Text style={styles.subheader}>
        Explore comfortable stays, book your perfect place
      </Text>
      <Text style={styles.description}>
        In our hotel booking service, we aim to provide a high-quality lodging experience. Our hotels offer luxurious rooms, excellent service, and convenient locations, making your travel enjoyable and memorable.
      </Text>
      <Text style={styles.contact}>
        If you have any questions or need assistance, feel free to reach out to our administrator.
      </Text>
      <Text style={styles.phone}>
        Phone <Icon name='call-sharp' type='ionicon' size={16} color={"#FF0000"} /> : +7 (919)-025-88-82
      </Text>
    </ScrollView>
  );
}

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
    marginTop: 50,
    fontSize: 16,
    color: '#FF0000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
