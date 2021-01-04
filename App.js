// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import Forgot from "./Pages/Authentication/Forgot/Forgot";
import Reset from "./Pages/Authentication/Reset/Reset";
import HeaderCloseBtn from "./Components/HeaderCloseBtn/HeaderCloseBtn";
import HeaderBackBtn from "./Components/HeaderBackBtn/HeaderBackBtn";

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
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#f3f5f9",
                height: 88,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerRight: () => (
                <Text
                  onPress={() => alert("This is a button!")}
                  style={{
                    paddingRight: 16,
                    color: "#F2994A",
                    fontSize: 15,
                    fontFamily: "circular-std-500",
                  }}
                >
                  Skip
                </Text>
              ),
              headerLeft: (props) => (
                <HeaderCloseBtn
                  onPress={() => {
                    // Do something
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Signin"
            component={SignIn}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "#f3f5f9",
                height: 88,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerLeft: (props) => (
                <Pressable onPress={() => navigation.goBack()}>
                  <HeaderBackBtn />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "#f3f5f9",
                height: 88,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerLeft: (props) => (
                <Pressable onPress={() => navigation.goBack()}>
                  <HeaderBackBtn />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Reset"
            component={Reset}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "#f3f5f9",
                height: 88,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerLeft: (props) => (
                <Pressable onPress={() => navigation.goBack()}>
                  <HeaderBackBtn />
                </Pressable>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
