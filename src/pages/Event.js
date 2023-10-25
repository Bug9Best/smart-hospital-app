import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Layer from "../Layout/lgradient";




const Event1 = () => {

  return (
    <SafeAreaView style={styles.container}>
          
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderEventCard(
          "คลีนิก สจล. เตรียมให้บริการแบบ Drive thru",
          "15 Sep 2023",
          require("../assets/image/drivethru.jpg")
        )}
        {renderEventCard(
          "รับบริจาคเพื่อผู้ป่วย ฝีดาดลิง",
          "15 Sep 2023",
          require("../assets/image/donation.webp")
        )}
        {renderEventCard(
          "สจล. เปิดบ้านรับบริจาคเลือดเพื่อการกุศล",
          "16 Sep 2023",
          require("../assets/image/Blood1.jpg")
        )}
      </ScrollView>
    </SafeAreaView>

  );
}

const renderEventCard = (title, date, imageSource) => (

  <View style={styles.eventCard}>
    <LinearGradient colors={["#FF8A48", "#FF8A48", "#FF8A48", "#FF8A48", "#EDCDBB"]} style={styles.linearGradient}>
      <View style={styles.centerImage}>
        <Image source={imageSource} style={styles.eventImage} />
      </View>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventDate}>{date}</Text>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollViewContent: {
    paddingBottom: 20, // Adjust this value as needed
  },
  title: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -1,
  },
  eventCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    paddingTop: 5,
    padding: 16
  },

  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  centerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImage: {
    height: 170,
    width: 480,
    resizeMode: "cover",
  },
  eventTitle: {
    padding: 16,
    fontSize: 16,
  },
  eventDate: {
    padding: 16,
    fontSize: 12,
    color: "#3F3D3C",
  },
});

export default Event1;
