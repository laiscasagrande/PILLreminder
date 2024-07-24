import { useNavigation } from "@react-navigation/native";
import { House, Pill } from "lucide";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-paper";

export default function NavigationBarBottom() {
  const navigation = useNavigation();

  const navigationAddRemedy = () => {
    navigation.navigate('AddRemedy');
    console.log('Navigated to AddRemedy screen');
  };

  const navigationHome = () => {
    navigation.navigate('Home');
    console.log('Navigated to AddRemedy screen');
  };

  return (
    <View style={styles.footer}>
      <Button onPress={navigationAddRemedy}>
        <Icon source="home" size={27} color="#06957B"/>
      </Button>
      <Button onPress={navigationHome}>
      <Icon source="pill" size={27} color="#06957B"/>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 70,
    width: "auto",
    backgroundColor: "#E2E5E5",
    padding: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", 
    flexDirection: "row",
  },
  button: {
    height: 50,
    width: 10,
    backgroundColor: "#06957B",
    borderRadius: 100,
    alignItems: "center"
  },
  icon: {
color: "#FFFF",
  }
});
