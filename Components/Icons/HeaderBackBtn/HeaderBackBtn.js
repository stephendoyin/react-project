import React from "react";
import { View } from "react-native";
import SvgBack from "./SvgBack";

function HeaderCloseBtn() {
  return (
    <View style={{ paddingLeft: 16 }}>
      <SvgBack />
    </View>
  );
}

export default HeaderCloseBtn;
