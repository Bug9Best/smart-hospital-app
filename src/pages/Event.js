import React from "react";
import base from "../modules/base_module";
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Event1 = () => {
  return (

    <SafeAreaView style={styles.container}>
    <base.ScrollView>
      
      <View style={styles.eventCards}>
        <Text style={styles.title}>ข่าวสาร/กิจกรรม</Text>
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
      </View>
          </base.ScrollView>

    </SafeAreaView>

  );
};

const renderEventCard = (title, date, imageSource) => (
  
  <View style={styles.eventCard}>
    <LinearGradient colors={["#FF8A48", "#FF8A48", "#FF8A48", "#FF8A48", "#EDCDBB"]} style={styles.linearGradient}>
      <Image source={imageSource} style={styles.eventImage} />
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
  title: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -1,
  },
  eventCards: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  eventCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  eventImage: {
    flex: 1,
    resizeMode: "cover",
  },
  eventTitle: {
    padding: 10,
    fontSize: 16,
  },
  eventDate: {
    padding: 10,
    fontSize: 12,
    color: "#3F3D3C",
  },
});

export default Event1;
