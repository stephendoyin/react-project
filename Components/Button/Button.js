import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

function Button({ onPress, btnStyle, ...props }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          height: 52,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          backgroundColor: btnStyle === "outlined" ? "transparent" : "#2F80ED",
          borderRadius: 31,
          elevation: btnStyle === "outlined" ? 0 : 3,
          borderWidth: btnStyle === "outlined" ? 1 : 0,
          borderColor: "#BDBDBD",
          position: "relative",
        }}
      >
        <Text
          style={{
            color: btnStyle === "outlined" ? "#303051" : "#fff",
            fontSize: 16,
            fontFamily: "circular-std-500",
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;

{
  /* <View style={styles.socialBtn}>
  <FacebookIcon />
  <Text style={styles.facebooktext}>Sign in with Facebook</Text>
</View>; */
}
