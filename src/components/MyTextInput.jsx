import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";
import { useField, useFormikContext } from "formik";

//Components
import MyLabel from "./MyLabel";
import MyIcon from "./MyIcon";
import MyPopUp from "./MyPopUp";

const MyTextInput = (props) => {
  const [inputProps, metaProps] = useField(props);
  const { handleBlur, handleChange } = useFormikContext();

  return (
    <View style={styles.container}>
      <View style={styles.labelArea}>
        <MyLabel>{props.label}</MyLabel>
        {props.addQuestionIcon === true && <MyPopUp />}
      </View>

      <View style={styles.inputArea}>
        <View style={styles.input}>
          <MyIcon
            name={props.icon}
            style={{ fontSize: props.iconSize, padding: 10 }}
            color={"black"}
          />
          {/* @ts-ignore */}
          <TextInput
            style={styles.textInput}
            inputMode={props.inputMode}
            value={inputProps.value}
            onChangeText={handleChange(props.name)}
            onBlur={handleBlur(props.name)}
          />
          {metaProps.touched && metaProps.error ? (
            <Text style={styles.errorText}>{metaProps.error}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  labelArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 16,
    paddingLeft: 16,
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#A7A6A7",
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontSize: 16,
    color: "black",
  },
  errorText: {
    padding: 5,
    fontSize: 10,
    maxWidth: 150,
    textAlign: "left",
  },
});
