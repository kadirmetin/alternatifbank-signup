import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

//Components
import MyLabel from "../MyLabel";
import MyIcon from "../MyIcon";
import MyPicker from "../MyPicker";

//Utils
import { useGetDistrictsByIdQuery } from "../../utils/apis/locationApi";

const DistrictPicker = (props) => {
  const {
    data: showDistrictsByIdData,
    error: showDistrictsByIdError,
    isLoading: showDistrictsByIdIsLoading,
  } = useGetDistrictsByIdQuery(props.cityId);

  return (
    <View style={styles.container}>
      <MyLabel>{props.label}</MyLabel>

      <View style={styles.inputArea}>
        <View style={styles.input}>
          <MyIcon
            name={props.icon}
            style={{ fontSize: props.iconSize, padding: 10 }}
            color={"black"}
          />

          <MyPicker name="district">
            <Picker.Item label="Seçiniz" value="" />
            {showDistrictsByIdData?.map((city) => (
              <Picker.Item
                key={city.DISTRICT}
                label={city.DISTRICT}
                value={city.DISTRICT}
              />
            ))}
          </MyPicker>
        </View>
      </View>
    </View>
  );
};

export default DistrictPicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
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
});
