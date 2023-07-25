import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

//Components
import MyLabel from "./MyLabel";
import MyIcon from "./MyIcon";

export default function MyDatePicker(props) {
  const [dateProps, metaProps] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setFieldValue(dateProps.name, moment(date).format("YYYY-MM-DD"));
    setDatePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <MyLabel>{props.label}</MyLabel>

      <View style={styles.inputArea}>
        <Pressable onPress={showDatePicker}>
          <View style={styles.input}>
            <MyIcon
              name={props.icon}
              style={{ fontSize: props.iconSize, padding: 10 }}
              color={"black"}
            />
            <Text style={styles.dateInput}>{`${
              selectedDate ? moment(selectedDate).format("DD MMM YYYY") : ""
            }`}</Text>
            {metaProps.touched && metaProps.error ? (
              <Text style={styles.errorText}>{metaProps.error}</Text>
            ) : null}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  inputArea: {
    flexDirection: "row",
    marginStart: 16,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#A7A6A7",
    width: "92%",
  },
  input: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateInput: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "black",
    width: "50%",
  },
  errorText: {
    padding: 5,
    fontSize: 10,
    maxWidth: 150,
    textAlign: "left",
  },
});
