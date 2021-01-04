import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

export default function SignUp({ navigation }) {
  function onChangeText(text) {
    // setInputValue(text);
  }

  function onPress() {
    console.log("dem call me");
  }

  const inputValues = [
    { label: "Name", type: "text", id: "1" },
    { label: "Username", type: "text", id: "2" },
    { label: "Email", type: "email", id: "3" },
    { label: "Password", type: "password", id: "4" },
    { label: "Confirm Password", type: "password", id: "5" },
  ];

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.paragraph}>Create an account to continue</Text>
        <View style={{ marginTop: 15, marginBottom: 50 }}>
          {inputValues.map(({ label, id, type }) => (
            <Input
              label={label}
              key={id}
              onchangeText={(text) => onChangeText(text)}
              type={type}
            />
          ))}
        </View>

        <Button onPress={() => onPress()}>Sign Up</Button>
        <View style={styles.promptStyle}>
          <Text style={styles.paragraph}>Already have an account?</Text>
          <TouchableWithoutFeedback>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Signin")}
            >
              Sign In
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F9",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#303051",
    fontSize: 26,
    fontFamily: "circular-std-900",
    marginBottom: 5,
  },
  paragraph: {
    color: "#828282",
    fontSize: 13,
    fontFamily: "circular-std-400",
  },
  link: {
    color: "#2F80ED",
    fontFamily: "circular-std-700",
    fontSize: 15,
  },
  promptStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 16,
  },
});
