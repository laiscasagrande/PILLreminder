import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function UserRegistration({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function handleForget() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //  Signed in
        const user = userCredential.user;
        alert(user.email + " cadastrado!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        alert("Não foi possível realizar o login aaaa");
      });
  }

  return (
    <>
      <View style={styles.contentPrimary}>
        <View style={styles.contentSecondary}>
          <Text style={styles.title}>Realize seu cadastro</Text>
          <View style={styles.information}>
            <TextInput
              mode="outlined"
              underlineColor="#06957B"
              style={styles.textInput}
              label="Nome completo"
              value={name}
              onChangeText={setName}
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Email"
              value={email}
              onChangeText={setEmail}
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            />
          </View>
        </View>
        <Button style={styles.button} mode="contained" onPress={handleForget}>
          Cadastrar
        </Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#06957B",
    fontSize: 30,
    fontWeight: "bold",
  },
  contentPrimary: {
    flexDirection: "column",
    gap: 40,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
    outline: "none",
    height: "100%",
  },
  contentSecondary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  information: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
  },
  textInput: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "#E2E5E5",
  },
  button: {
    borderRadius: 10,
    width: 200,
    height: 50,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 100,
    color: "#06957B",
    backgroundColor: "#06957B",
    fontSize: 50,
    width: 300
  },
  footer: {
    backgroundColor: "#06957B",
    color: "#06957B",
  },
});
