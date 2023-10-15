import React from "react";
import base from "../modules/base_module";
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  return (
    <base.SafeAreaView style={styles.box}>
      <View style={styles.header}>
        <Text style={styles.titleText}>ข้อมูลบัญชี</Text>
      </View>

      <View style={styles.DisplayProfile}>
        <Image
          source={require('../../assets/image/Cat.jpeg')}
          style={styles.profileImage}
        />
        <Text style={{ marginTop: -90, marginLeft: 100, fontWeight: 'bold', color: '#FF8A48', }}>ชื่อ : นายนันทนนท์ จินขุนทอง</Text>
        <Text style={{ alignSelf: 'center', color: '#FF8A48', marginLeft: 330, marginTop: -35 }}>
        </Text>
      </View>
    </base.SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  DisplayProfile: {
    backgroundColor: "white",
    marginTop: -600, // Adjust the marginTop to move the DisplayProfile up
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
    height: 150,
    width: 400,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 300,
    marginTop: 20,
    marginRight: 250,
  },
  welcomeText1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginTop: -40,
    marginLeft: 50,
  },
  welcomeText2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginTop: -35,
    marginLeft: -130,
  },
  titleText: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -640,
  },
});

export default Home;
