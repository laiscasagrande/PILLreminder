import { View } from "react-native";
import { Text } from "react-native-paper";
import { BottomNavigation} from "react-native-paper";

const MusicRoute = () => <Text></Text>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

export function AddRemedy() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {
        key: "music",
        title: "Home",
        focusedIcon: "heart",
        unfocusedIcon: "heart-outline",
      },
      { key: "albums",
         title: "Novo", 
         focusedIcon: "album" },
      // { key: "recents", title: "Lista", focusedIcon: "history" },
      // {
      //   key: "notifications",
      //   title: "Notifications",
      //   focusedIcon: "bell",
      //   unfocusedIcon: "bell-outline",
      // },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
      });
  return (
    <>
    <View style={styles.content}>
    <Text style={styles.title}>ADICIONAR MEDICAMENTO</Text>
    <TextInput
      style={styles.textInput}
      label="Nome do medicamento"
      // value={email}
      // onChangeText={setEmail}
    />
    <TextInput
      style={styles.textInput}
      label="Dosagem"
      secureTextEntry
      // value={password}
      // onChangeText={setPassword}
    />
    <TextInput
      style={styles.textInput}
      label="Período"
      secureTextEntry
      // value={password}
      // onChangeText={setPassword}
    />
    <TextInput
      style={styles.textInput}
      label="Horário"
      secureTextEntry
      // value={password}
      // onChangeText={setPassword}
    />
    <Button style={styles.button} mode="contained">
      Incluir
    </Button>
  </View>
  <BottomNavigation
  style={styles.footer}
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
  </>
  );
}


const styles = StyleSheet.create({
    title: {
      color: "#06957B",
      fontSize: 20,
      fontWeight: "bold",
    },
    content: {
      flexDirection: "column",
      gap: 40,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: "#fff",
    },
    textInput: {
      width: 300,
      borderRadius: 10,
      backgroundColor: "#E2E5E5",
    },
    button: {
      borderRadius: 10,
      width: 200,
      height: 50,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 100,
      color: "#06957B",
      backgroundColor: "#06957B",
      fontSize: 50,
    },
    footer: {
      backgroundColor: '#06957B',
      color: '#06957B'
    }
  });