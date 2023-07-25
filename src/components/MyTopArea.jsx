import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MyTopArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" style={styles.headerIcon} />
        <Text style={styles.headerText}>Müşteri Ol</Text>
        <View></View>
      </View>
      <View style={styles.headerTop}>
        <View style={styles.loadingBar}></View>
      </View>
      <View style={styles.topTextArea}>
        <Text style={styles.topTextAreaText}>
          Sizi tanıyabilmemiz için lütfen{" "}
          <Text style={{ fontWeight: "bold" }}>kimlik</Text> ve{" "}
          <Text style={{ fontWeight: "bold" }}>telefon</Text> bilgilerinizi
          girin.
        </Text>
      </View>
    </View>
  );
};

export default MyTopArea;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#902149",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  headerIcon: {
    fontSize: 24,
    color: "white",
  },
  headerTop: {
    backgroundColor: "#DEE1E6",
    height: 15,
    justifyContent: "center",
  },
  loadingBar: {
    backgroundColor: "#C03A6E",
    height: 15,
    width: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  topTextArea: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: "#F5F4F4",
    padding: 25,
  },
  topTextAreaText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 18,
    color: "#5A1332",
  },
});
