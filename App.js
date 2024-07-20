import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from 'firebase/app';
import { initializeAuth } from "firebase/auth";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  const firebaseConfig = {
    apiKey: "AIzaSyAUgxpyIBOnoOv2IoWirxt7ihhLr_s7fWY",
    authDomain: "pillreminder-fdb14.firebaseapp.com",
    projectId: "pillreminder-fdb14",
    storageBucket: "pillreminder-fdb14.appspot.com",
    messagingSenderId: "74191148723",
    appId: "1:74191148723:web:4c4145469579616b7982c6",
    measurementId: "G-XVE119D977"
  };

  const app = initializeApp(firebaseConfig);

  // const auth = initializeAuth(app, {
  //   persistence: getReactNativePersistence(AsyncStorage)
  // })

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
