import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Check(props) {
  return (
    <Svg
      {...props}
      width={16}
      height={11}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.107 1.061L5.68 10.49 1.393 6.204"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}

export default Check;
