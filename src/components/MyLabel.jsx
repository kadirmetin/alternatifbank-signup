import { StyleSheet, Text } from "react-native";
import React from "react";

const MyLabel = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

export default MyLabel;

const styles = StyleSheet.create({
  label: {
    marginStart: 16,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
