import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useField } from "formik";
import Checkbox from "expo-checkbox";

const MyCheckbox = (props) => {
  const [inputProps, metaProps, helperProps] = useField(props);

  return (
    <>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={inputProps.value}
          onValueChange={(value, index) => {
            helperProps.setValue(value);
          }}
          color={inputProps.value ? "#902049" : undefined}
        />
        <Text style={styles.text}>{props.label}</Text>
      </View>

      {metaProps.touched && metaProps.error ? (
        <Text style={styles.errorText}>{metaProps.error}</Text>
      ) : null}
    </>
  );
};

export default MyCheckbox;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginStart: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: { marginRight: 7.5 },
  text: {
    flex: 1,
  },
  errorText: {
    flex: 0.5,
    padding: 5,
    fontSize: 10,
    maxWidth: 150,
    textAlign: "left",
  },
});
