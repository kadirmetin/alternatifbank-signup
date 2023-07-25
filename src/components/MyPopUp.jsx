import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

//Components
import MyIcon from "./MyIcon";

const MyPopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <MyIcon
          name={"question-circle"}
          style={{ fontSize: 20, paddingRight: 16 }}
          color={"purple"}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{ width: "100%", height: "25%" }}
      >
        <View style={styles.modalView}>
          <Image
            style={styles.popupImage}
            source={{
              uri: "https://i.ibb.co/ZSJ7f0F/untitled-1-09102020160224332446059e00.jpg",
            }}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Kapat</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default MyPopUp;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: "75%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  popupImage: {
    width: 350,
    height: 250,
    resizeMode: "contain",
  },
});
