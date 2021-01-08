import React from "react";
import { Text, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import SignIn from "../../Pages/Authentication/SignIn/SignIn";
import Forgot from "../../Pages/Authentication/Forgot/Forgot";
import Reset from "../../Pages/Authentication/Reset/Reset";
import Token from "../../Pages/Authentication/Token/Token";
import HeaderCloseBtn from "../../Components/Icons/HeaderCloseBtn/HeaderCloseBtn";
import HeaderBackBtn from "../../Components/Icons/HeaderBackBtn/HeaderBackBtn";

const Stack = createStackNavigator();

export default function Authentication() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign">
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
        <Stack.Screen
          name="Token"
          component={Token}
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
