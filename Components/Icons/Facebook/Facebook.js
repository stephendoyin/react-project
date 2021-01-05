import * as React from "react";
import { View } from "react-native";

import Svg, { Path } from "react-native-svg";

function FacebookIcon(props) {
  return (
    <View style={{}}>
      <Svg
        {...props}
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19 4h-3a5 5 0 00-5 5v3H8v4h3v8h4v-8h3l1-4h-4V9a1 1 0 011-1h3V4z"
          stroke="#4267B2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default FacebookIcon;
