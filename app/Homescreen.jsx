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
    fontSize: 36, // Bigger font size
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center', // Align to the left
    marginTop: 400, // Adjusts the vertical position (lower from the top)

    marginBottom: 10, // Space below the title
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', // Center buttons vertically
    alignItems: 'center', // Center buttons horizontally
  },
  button: {
    width: '80%', // Equal width for both buttons
    backgroundColor: 'white',
    paddingVertical: 15, // Button height
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Space between buttons
    alignItems: 'center', // Center text inside the button
  },
  buttonText: {
    fontSize: 18,
    color: '#7B31FC',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
