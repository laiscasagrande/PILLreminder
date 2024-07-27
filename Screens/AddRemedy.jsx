import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import NavigationBarBottom from "./components/ButtonNavigation";
import { collection, addDoc } from "firebase/firestore"



export default function AddRemedy() {

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <View style={styles.viewInputs}>
            <Text style={styles.title}>ADICIONAR MEDICAMENTO</Text>
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Nome do medicamento"
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            // value={email}
            // onChangeText={setEmail}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Dosagem"
              secureTextEntry
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            // value={password}
            // onChangeText={setPassword}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Período"
              secureTextEntry
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            // value={password}
            // onChangeText={setPassword}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Horário"
              secureTextEntry
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            // value={password}
            // onChangeText={setPassword}
            />
          </View>
          <View>
            <Button style={styles.button} mode="contained" onPress={createNewRemedy}>
              Incluir
            </Button>
          </View>
        </View>
      </View>
      <NavigationBarBottom />
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
    height: "100%",
    justifyContent: "space-between",
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
    width: 300,
  },
  footer: {
    backgroundColor: "#06957B",
    color: "#06957B",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewInputs: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "center"
  }
});
