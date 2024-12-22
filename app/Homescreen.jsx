import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B31FC',
    padding: 20,
  },
  title: {
    fontSize: 36, 
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginTop: 400, 

    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  button: {
    width: '80%', 
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 18,
    color: '#7B31FC',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
