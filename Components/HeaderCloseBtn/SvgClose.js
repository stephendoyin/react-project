import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClose(props) {
  return (
    <Svg
      {...props}
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13 1.143l-12 12m0-12l12 12"
        stroke="#151522"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgClose;
