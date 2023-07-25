import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const MyIcon = ({ name, style, color }) => {
  return <FontAwesome name={name} style={style} color={color} />;
};

export default MyIcon;
