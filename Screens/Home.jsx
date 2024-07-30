import { collection, getDocs, getFirestore } from "firebase/firestore";
import * as React from "react";
import { StyleSheet, View } from "react-native";
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

  return (
    <>
      <View style={styles.home}>
        <View style={styles.container}>
          {data.map((pill) => {
            return (
              <CardPill
                id={pill.id}
                name={pill.name}
                dosage={pill.dosage}
                period={pill.period}
                time={pill.time}
              />
            );
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
  },
});
