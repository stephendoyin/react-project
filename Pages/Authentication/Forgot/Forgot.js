import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

export default function Forgot({ navigation }) {
  function onChangeText(text) {
    // setInputValue(text);
  }

  function onPress() {
    navigation.navigate("Reset");
  }

  const inputValues = [{ label: "Email", type: "email", id: "3" }];

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Reset Password</Text>
        <Text style={styles.paragraph}>
          Enter your email below to recieve your password reset instructions
        </Text>
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

        <Button onPress={() => onPress()}>Submit</Button>
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
  paragraph: {
    color: "#828282",
    fontSize: 13,
    fontFamily: "circular-std-400",
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
});
