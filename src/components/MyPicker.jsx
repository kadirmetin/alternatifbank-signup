import React from "react";
import { StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useField } from "formik";

const MyPicker = (props) => {
  const [inputProps, metaProps, helperProps] = useField(props);

  return (
    <>
      <Picker
        selectedValue={inputProps.value}
        onValueChange={(value, index) => {
          helperProps.setValue(value);
        }}
        itemStyle={{ color: "black" }}
        style={{ flex: 1 }}
      >
        {props.children}
      </Picker>

      {metaProps.touched && metaProps.error ? (
        <Text style={styles.errorText}>{metaProps.error}</Text>
      ) : null}
    </>
  );
};

export default MyPicker;

const styles = StyleSheet.create({
  errorText: {
    flex: 0.50,
    padding: 5,
    fontSize: 10,
    maxWidth: 150,
    textAlign: "left",
  },
});
