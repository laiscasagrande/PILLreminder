import { useNavigation } from "@react-navigation/native";
import { House, Pill } from "lucide";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-paper";

export default function NavigationBarBottom({navigation}) {

    const navigationAddRemedy = () => {
        navigation.navigate("AddRemedy");
        console.log('click');
      };

  return (
    <View style={styles.footer}>
      <Button onPress={navigationAddRemedy}>
        <Icon source="home" size={25} />
      </Button>
      <Button>
      <Icon source="pill" size={25} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 70,
    width: "auto",
    backgroundColor: "#06957B",
    padding: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
