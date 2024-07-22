import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import CardPill from "./components/cardPill";


export default function Home() {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  const remedy = [{
    id: '1',
    name: 'Amoxilina',
    image: 'https://medicina.ribeirao.br/wp-content/uploads/2023/09/Amoxicilina-imagem-editorial-caixa-1536x1023.jpeg.webp'
  },
  {
    id: '2',
    name: 'Paracetamol',
    image: 'https://picsum.photos/700'
  }
  ]

  return (
     <View style={styles.container}>
       {remedy.map(pill => {
         return <CardPill
           id={pill.id}
           name={pill.name}
           image={pill.image}
         />
       })}
     </View>
  );
}

 const styles = StyleSheet.create({
   container: {
     flexDirection: "column",
     gap: 50,
     overflow: "scroll"
   }
 });


