import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

const MyButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        // @ts-ignore
        onPress={handleSubmit}
      >
        <Text style={styles.pressableText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    height: "15%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pressable: {
    backgroundColor: "#902149",
    borderRadius: 8,
    fontSize: 20,
    color: "white",
    padding: 10,
    width: "95%",
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
