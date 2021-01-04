import React, { useState, useRef, useEffect } from "react";
import { Animated, TextInput, StyleSheet, View, Text } from "react-native";
import PasswordViewIcon from "../PasswordViewIcon/PasswordViewIcon";

function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [InputText, setInputText] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const focusAnim = useRef(new Animated.Value(0)).current;
  const fontAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: 12,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(fontAnim, {
      toValue: 16,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, []);

  function handleFocus() {
    setIsFocused(true);
    Animated.timing(focusAnim, {
      toValue: -5,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(fontAnim, {
      toValue: 11,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  function handleBlur() {
    setIsFocused(false);
    if (InputText?.trim().length < 1) {
      console.log(props.value);
      Animated.timing(focusAnim, {
        toValue: 12,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(fontAnim, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }

  function handleChange(text) {
    setInputText(text);
    props.onchangeText(InputText);
  }

  function handlePress() {
    setHidePassword((prev) => !prev);
  }

  return (
    <View style={{ marginTop: 19 }}>
      <Animated.Text
        style={{
          fontSize: fontAnim,
          fontFamily: "circular-std-400",
          color: "#999",
          position: "absolute",
          left: 0,
          top: focusAnim,
        }}
      >
        {props.label}
      </Animated.Text>
      <View>
        <TextInput
          style={{
            borderBottomColor: isFocused ? "#2F80ED" : "#D0CBCB",
            borderBottomWidth: isFocused ? 2 : 1,
            height: 41,
            fontFamily: "circular-std-500",
            color: "#303051",
            fontSize: 16,
          }}
          onChangeText={(text) => handleChange(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={props.type === "password" && hidePassword}
        />
        {props.type === "password" ? (
          <PasswordViewIcon onIconPress={handlePress} />
        ) : null}
      </View>
    </View>
  );
}

export default Input;
