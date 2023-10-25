import * as React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import Layer from "../Layout/lgradient";


const History1 = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.historyContainer}>  
        <View style={styles.historyTabContainer}>
          <View style={styles.historyTabLeft}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>ประวัติการรักษา</Text>
          </View>
          <View style={styles.historyTabRight}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>ประวัติการนัดหมาย</Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the component takes up the entire screen
    height: "100%", // Make sure the component takes up the entire screen
    backgroundColor: "#F4F4F4",
    marginTop: 1,
    alignItems: "center",
  },
  box: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "5%",
    justifyContent: "center",
  },
  titleText: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  historyTabContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  historyTabLeft: {
    backgroundColor: "#FFA370",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    margin: 1,
    borderTopLeftRadius: 10
  },
  historyTabRight: {
    backgroundColor: "#FFA370",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    margin: 1,
    borderTopRightRadius: 10
  },
  historyContainer: {
    width: "95%",
    height: "90%",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
  },
});

export default History1;
