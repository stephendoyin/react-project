import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../../Components/Button/Button";

export default function Token({ navigation }) {
  const [tokenInput, setTokenInput] = useState([
    { focused: true, id: "1" },
    { focused: false, id: "2" },
    { focused: false, id: "3" },
    { focused: false, id: "4" },
  ]);

  function onChangeText(text) {
    // setInputValue(text);
  }

  function onPress() {
    // console.log("dem call me");
  }
  function handleChange(text) {}

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Reset Password</Text>
        <Text style={styles.paragraph}>
          Enter your new password and confirm to reset you password
        </Text>
        <View style={styles.inputs}>
          <TextInput
            defaultValue=""
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            autoFocus={tokenInput[0]?.focused}
            secureTextEntry={true}
            returnKeyType={"next"}
            onChangeText={(text) => {
              if (text.trim().length >= 1) secondTextInput.focus();
            }}
          />
          <TextInput
            defaultValue=""
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            secureTextEntry={true}
            ref={(input) => {
              secondTextInput = input;
            }}
            onChangeText={(text) => {
              if (text.trim().length >= 1) thirdTextInput.focus();
            }}
          />
          <TextInput
            defaultValue=""
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            secureTextEntry={true}
            ref={(input) => {
              thirdTextInput = input;
            }}
            onChangeText={(text) => {
              if (text.trim().length >= 1) fourthTextInput.focus();
            }}
          />
          <TextInput
            defaultValue=""
            keyboardType="numeric"
            maxLength={1}
            style={styles.input}
            secureTextEntry={true}
            ref={(input) => {
              fourthTextInput = input;
            }}
          />
        </View>

        <Button onPress={() => onPress()}>Reset</Button>
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
  inputs: {
    marginTop: 15,
    marginBottom: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 12,
    flexDirection: "row",
    color: "#303051",
  },
  input: {
    width: "22%",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "circular-std-700",
    borderBottomWidth: 1,
    borderBottomColor: "#D0CBCB",
    flexDirection: "row",
    height: 50,
  },
});
