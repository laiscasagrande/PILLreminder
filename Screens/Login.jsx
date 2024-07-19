import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
        <Text
        style={styles.text}
        >
            PILLreminder
        </Text>
      <TextInput
        style={styles.textInput}
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.textInput}
        label="Senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
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
    padding: 24,
    backgroundColor: "#fff",
  },
  textInput: {
    width: 300,
    borderRadius: 10,
    backgroundColor: '#E2E5E5',
  },
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 100,
    color: '#06957B',
    backgroundColor: '#06957B',
    fontSize: 50,

  },
  text: {
    fontSize: 40,
    justifyContent: 'center',
    alignContent: 'center',
    color: '#06957B',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
