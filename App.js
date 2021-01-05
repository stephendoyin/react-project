// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Authentication from "./modules/Authentication/Authentication";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "circular-std-400": require("./assets/fonts/circular-std-400.otf"),
    "circular-std-500": require("./assets/fonts/circular-std-500.otf"),
    "circular-std-700": require("./assets/fonts/circular-std-700.otf"),
    "circular-std-900": require("./assets/fonts/circular-std-900.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Authentication />;
  }
}
