import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import CardPill from "./components/cardPill";
import MyComponent from "./components/ButtonNavigation";
import NavigationBarBottom from "./components/ButtonNavigation";

export default function Home() {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const remedy = [
    {
      id: "1",
      name: "Amoxilina",
    },
    {
      id: "2",
      name: "Paracetamol",
    },
  ];

  return (
    <>
    <View style={styles.home}>
    <View style={styles.container}>
        {remedy.map((pill) => {
          return <CardPill id={pill.id} name={pill.name}/>;
        })}
      </View>
      <NavigationBarBottom /> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 50,
    overflow: "scroll",
  },
  home: {
    flex: 1,
    justifyContent: "space-between",
  }
});
