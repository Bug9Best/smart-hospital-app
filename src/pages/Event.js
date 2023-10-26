import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import { StyleSheet, SafeAreaView } from "react-native";
import BaseURL from "../services/base/base_service";
import axios from "axios";

const Event1 = () => {
  const [firstRender, setFirstRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState();

  var eventService = new BaseURL("event");

  const getDrug = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(eventService.BaseURL);
      if (response.status === 200) {
        setEvent(response.data);
        setIsLoading(false);
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDrug();
  }, [event]);

  return (
    <SafeAreaView style={styles.container}>
      <base.ScrollView contentContainerStyle={styles.scrollViewContent}>
        <base.FlatList
          data={event}
          renderItem={({ item }) => {
            return (
              renderEventCard(
                item.title,
                item.date,
                item.img,
              )
            );
          }}
        />
      </base.ScrollView>
    </SafeAreaView>
  );
}

const renderEventCard = (title, date, imageSource) => (
  <base.View style={styles.eventCard}>
    <base.View style={styles.centerImage}>
      <base.Image source={{ uri: imageSource }} style={styles.eventImage} />
    </base.View>
    <base.Text style={styles.eventTitle}>{title}</base.Text>
    <base.Text style={styles.eventDate}>{date}</base.Text>
  </base.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  title: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -1,
  },
  eventCard: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
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
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDate: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 14,
    color: "#3F3D3C",
  },
});

export default Event1;
