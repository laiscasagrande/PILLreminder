import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

export default function AddRemedy() {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>ADICIONAR MEDICAMENTO</Text>
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Nome do medicamento"
          // value={email}
          // onChangeText={setEmail}
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Dosagem"
          secureTextEntry
          // value={password}
          // onChangeText={setPassword}
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Período"
          secureTextEntry
          // value={password}
          // onChangeText={setPassword}
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Horário"
          secureTextEntry
          // value={password}
          // onChangeText={setPassword}
        />
        <Button style={styles.button} mode="contained">
          Incluir
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#06957B",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "column",
    gap: 40,
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
    width: 200,
    height: 50,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 100,
    color: "#06957B",
    backgroundColor: "#06957B",
    fontSize: 50,
  },
  footer: {
    backgroundColor: "#06957B",
    color: "#06957B",
  },
});
