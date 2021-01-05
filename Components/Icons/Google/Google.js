import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoogleIcon(props) {
  return (
    <Svg
      {...props}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.558 9.88l2.826 2.231M5.53 19.069l2.835-2.232m9.87 3.054l2.826 2.232m3.5-7.622a9.621 9.621 0 01-.166 1.75 10.036 10.036 0 11-3.5-9.494L18.43 9.25A6.458 6.458 0 0014.5 7.938a6.562 6.562 0 106.317 8.312h-5.88v-3.5h9.46c.104.578.16 1.163.166 1.75z"
        stroke="#EA4335"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GoogleIcon;
