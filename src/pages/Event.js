import React from "react";
import base from "../modules/base_module" 
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Event = () => {
  return (
    <base.SafeAreaView style={styles.box}>
      <Text style={{ alignSelf: 'center', color: '#FF8A48', fontSize: 20, marginTop:-800 }}>
        ข่าวสาร/กิจกรรม
      </Text>
      <View style={styles.rectangle} />
    </base.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    position: "absolute",
    bottom: 0, // เลื่อน Rectangle ไปด้านล่าง
    justifyContent: "center",
    flexDirection: "space-between",
    backgroundColor: "white",
    marginBottom: 620,
    borderWidth: 1,
    borderColor: "#7d869e40",
    borderRadius: 12,
    shadowColor: "#7d869e40",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    height: 200,
    width: 395,
    padding: 20,
    zIndex: -1, // ใช้ zIndex เพื่อควบคุมความสูง
  },
});

export default Event;
