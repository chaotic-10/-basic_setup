import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      {/* Curved Background */}
      <View style={styles.background}>
        <Text style={styles.title}>Register</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Username */}
        <View style={styles.inputField}>
          <Ionicons name="person-outline" size={20} color="white" />
          <TextInput
            placeholder="Username"
            placeholderTextColor="white"
            style={styles.input}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputField}>
          <Ionicons name="call-outline" size={20} color="white" />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="white"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email */}
        <View style={styles.inputField}>
          <Ionicons name="mail-outline" size={20} color="white" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9379ee",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "35%",
    backgroundColor: "#540bdf",
    borderBottomRightRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    position: "absolute",
    bottom: 19,
    left: 20,
  },
  inputContainer: {
    marginTop: "50%",
    width: "80%",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1.5, // Thin underline
    borderBottomColor: "#ffffffaa", // Blurred effect with transparency
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#7a31fa",
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#540bdf", // Shadow color
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  buttonText: {
    color: "#540bdf",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
