import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import FacebookIcon from "../../../Components/Icons/Facebook/Facebook";
import GoogleIcon from "../../../Components/Icons/Google/Google";

export default function SignIn({ navigation }) {
  function onChangeText(text) {
    // setInputValue(text);
  }

  function onPress() {
    console.log("dem call me");
  }

  const inputValues = [
    { label: "Email", type: "email", id: "3" },
    { label: "Password", type: "password", id: "4" },
  ];

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.paragraph}>Sign in to continue</Text>
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
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Forgot")}
          >
            <Text style={styles.paragraph}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <View style={styles.dividerBox}>
            <Text style={styles.paragraphLarge}>Or</Text>
          </View>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.socialBtn}>
            <FacebookIcon />
            <Text style={styles.facebooktext}>Sign in with Facebook</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.socialBtn}>
            <GoogleIcon />
            <Text style={styles.googletext}>Sign in with Google</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.promptStyleCenter}>
          <Text style={styles.paragraph}>Already have an account?</Text>
          <TouchableWithoutFeedback>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Signup")}
            >
              {" "}
              Sign Up
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
  dividerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    backgroundColor: "#F3F5F9",
  },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  divider: {
    width: 120,
    borderTopWidth: 1,
    borderColor: "#bdbdbd",
    height: 1,
    position: "absolute",
    top: 15,
  },
  headerText: {
    color: "#303051",
    fontSize: 26,
    fontFamily: "circular-std-900",
    marginBottom: 5,
  },
  socialBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderRadius: 31,
    borderColor: "#bdbdbd",
    borderWidth: 1,
    marginBottom: 8,
  },
  paragraph: {
    color: "#828282",
    fontSize: 13,
    fontFamily: "circular-std-400",
  },
  facebooktext: {
    fontFamily: "circular-std-700",
    color: "#4267B2",
    marginLeft: 12,
  },
  googletext: {
    fontFamily: "circular-std-700",
    color: "#EA4335",
    marginLeft: 12,
  },
  paragraphLarge: {
    color: "#828282",
    fontSize: 16,
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
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingTop: 16,
  },
  promptStyleCenter: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
  space: {
    marginBottom: 12,
  },
});
