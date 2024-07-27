import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import CardPill from "./components/cardPill";
import MyComponent from "./components/ButtonNavigation";
import NavigationBarBottom from "./components/ButtonNavigation";

export default function Home() {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const [data, setData] = React.useState('')

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

  const viewData = async () => {
    try {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "remedy"))
      setData( querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <View style={styles.home}>
    <View style={styles.container}>
        {data.map((pill) => {
          return <CardPill id={pill.id} name={pill.name} dosage={pill.dosage} period={pill.period}/>;
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
