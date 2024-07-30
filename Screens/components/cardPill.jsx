import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

export default function CardPill({ id, name, dosage, period, time, onDelete }) {

  const handleDelete = async () => {
    try {
      const db = getFirestore();
      const docRef = doc(db, "remedy", id); // 'remedy' é o nome da coleção e id é o ID do documento
      await deleteDoc(docRef);
      if (onDelete) {
        onDelete(id); // Chama a função onDelete passada como prop para atualizar a lista
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <Card key={id} style={styles.card}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.content}>
        <Text style={styles.dosage}>{dosage}mg</Text>
        <View>
          <Text style={styles.hour}>{time}</Text>
          <Text style={styles.hour}>{period}</Text>
          <Button style={styles.hour} onPress={handleDelete}>Apagar</Button>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 100,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    padding: 10,
    marginBottom: 20
  },
 text: {
    color: "#06957B",
    fontSize: 25,
    fontWeight: "bold",
  },
  dosage: {
    color: "#06957B",
    fontSize: 20,
    fontWeight: "bold",
  },
  hour: {
    color: "#06957B",
    fontSize: 15,
    fontWeight: "bold",
  }
});
