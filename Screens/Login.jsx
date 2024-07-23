import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import * as React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserRegistration from "./UserRegistration";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const Stack = createNativeStackNavigator();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      navigation.navigate("Home");
      // ...
    } else {
      // User is signed out
      // ...
      navigation.navigate("Login");
    }
  });

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
    console.log(email, password);
  }

  const navigationUserRegistration = () => {
    navigation.navigate("UserRegistration");
    console.log('click');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PILLreminder</Text>
      <TextInput
        mode="outlined"
        style={styles.textInput}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        mode="outlined"
        style={styles.textInput}
        label="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button style={styles.buttonRegister} onPress={navigationUserRegistration}>
        É novo por aqui? Cadastre-se!
      </Button>

      <Button style={styles.button} mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  textInput: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "#E2E5E5",
  },
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 100,
    color: "#06957B",
    backgroundColor: "#06957B",
    fontSize: 50,
  },
  text: {
    fontSize: 40,
    justifyContent: "center",
    alignContent: "center",
    color: "#06957B",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonRegister: {
    cursor: "pointer",
    color: "#06957B",
  },
});
