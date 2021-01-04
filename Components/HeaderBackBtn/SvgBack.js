import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBack(props) {
  return (
    <Svg
      {...props}
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.008 13.143l-6-6 6-6"
        stroke="#151522"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgBack;
