import * as React from "react";
import { View, TouchableWithoutFeedback } from "react-native";

import Svg, { Path } from "react-native-svg";

function PasswordViewIcon({ onIconPress, ...props }) {
  const [hidePswd, setHidePswd] = React.useState(true);

  const onPress = () => {
    setHidePswd((prev) => !prev);
    onIconPress();
  };

  const iconJsx = hidePswd ? (
    <Svg
      {...props}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.817 13.817a2.571 2.571 0 11-3.634-3.634M2.57 2.57L21.43 21.428m-4.338-4.337A8.63 8.63 0 0112 18.857C6 18.857 2.571 12 2.571 12A15.814 15.814 0 016.91 6.908L17.09 17.091zM10.2 5.348a7.817 7.817 0 011.8-.205c6 0 9.429 6.857 9.429 6.857a15.87 15.87 0 01-1.852 2.734L10.2 5.348z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ) : (
    <Svg
      {...props}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 14s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="#2F80ED"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 17a3 3 0 100-6 3 3 0 000 6z"
        stroke="#2F80ED"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
  return (
    <View
      style={{
        position: "absolute",
        right: 0,
        bottom: 8,
        zIndex: 22,
      }}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View>{iconJsx}</View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default PasswordViewIcon;
