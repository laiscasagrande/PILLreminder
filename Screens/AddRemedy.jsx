import { View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import NavigationBarBottom from "./components/ButtonNavigation";
import { collection, addDoc } from "firebase/firestore"
import { createNewRemedy } from "../CloudFirestore";
import { useState } from "react";

export default function AddRemedy({navigation}) {
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState('') 
  const [period, setPeriod] = useState('') 
  const [time, setTime] = useState('') 

  function newRemedy(){
    const remedyData = {
      name: name,
      dosage: dosage,
      period: period,
      time: time
    }
    createNewRemedy(remedyData, navigation)
  }

  return (
    <>
    
      <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.mainScrollStyle}>
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
            value={name}
            onChangeText={setName}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Dosagem"
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            value={dosage}
          onChangeText={setDosage}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Por quantos dias?"
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            value={period}
            onChangeText={setPeriod}
            />
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Intervalo (hora)"
              theme={{
                colors: {
                  primary: '#06957B', // Remove a borda ao focar
                },
              }}
            value={time}
            onChangeText={setTime}
            />
          </View>
          <View>
            <Button style={styles.button} mode="contained" onPress={newRemedy}>
              Incluir
            </Button>
          </View>
        </View>
        </ScrollView>
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
    width: 300
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
    alignItems: "center",
    marginTop: 50,
  },
  mainScrollStyle: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
