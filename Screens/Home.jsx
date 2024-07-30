import { collection, getDocs, getFirestore } from "firebase/firestore";
import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import NavigationBarBottom from "./components/ButtonNavigation";
import CardPill from "./components/cardPill";

export default function Home() {
  const [data, setData] = React.useState([]);

  const viewData = async () => {
    try {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "remedy"));

      const pills = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(pills)

      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    viewData();
  }, []);


  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };
  
  return (
    <>
      <View style={styles.home}>
        <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <CardPill
          id={item.id}
          name={item.name}
          dosage={item.dosage}
          period={item.period}
          time={item.time}
          onDelete={handleDelete}
        />
        )}
       />
        <NavigationBarBottom />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 50,
  },
  home: {
    flex: 1,
    justifyContent: "space-between",
  },
  list: {
    paddingHorizontal: 10
  }
});
