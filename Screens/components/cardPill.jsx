import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function CardPill({ id, name, dosage, period, time }) {
  return (
    <Card key={id} style={styles.card}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.content}>
        <Text style={styles.dosage}>{dosage}mg</Text>
        <View>
          <Text style={styles.hour}>{time}</Text>
          <Text style={styles.hour}>{period}</Text>
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
