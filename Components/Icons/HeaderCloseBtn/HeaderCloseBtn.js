import React from "react";
import { View } from "react-native";
import SvgClose from "./SvgClose";

function HeaderCloseBtn() {
  return (
    <View style={{ paddingLeft: 16 }}>
      <SvgClose />
    </View>
  );
}

export default HeaderCloseBtn;
