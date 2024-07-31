import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Icon } from "react-native-paper";

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
      <View style={styles.header}>
        <Text style={styles.text}>{name}</Text>
        <Button onPress={handleDelete}>
        <Icon source="delete" size={27} color="#06957B"/>
        </Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.dosage}>{dosage}mg</Text>
        <View>
          <Text style={styles.hour}>
            {time} em {time} hora(s)
          </Text>
          <Text style={styles.hour}>{period} dia(s)</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
  },
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
    marginBottom: 20,
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
  },
});
