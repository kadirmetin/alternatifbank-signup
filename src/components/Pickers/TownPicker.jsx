import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

//Components
import MyLabel from "../MyLabel";
import MyIcon from "../MyIcon";
import MyPicker from "../MyPicker";

//Utils
import { useGetTownByIdQuery } from "../../utils/apis/locationApi";

const TownPicker = ({ cityId, district, label, icon, iconSize }) => {
  const {
    data: showTownByIdData,
    error: showTownByIdError,
    isLoading: showTownByIdIsLoading,
  } = useGetTownByIdQuery({ cityId, district });

  return (
    <View style={styles.container}>
      <MyLabel>{label}</MyLabel>
      <View style={styles.inputArea}>
        <View style={styles.input}>
          <MyIcon
            name={icon}
            style={{ fontSize: iconSize, padding: 10 }}
            color={"black"}
          />
          <MyPicker name="neighbourhood">
            <Picker.Item label="Seçiniz" value="" />
            {showTownByIdData?.map((district) => (
              <Picker.Item
                key={district.TOWN}
                label={district.TOWN}
                value={district.TOWN}
              />
            ))}
          </MyPicker>
        </View>
      </View>
    </View>
  );
};

export default TownPicker;

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
